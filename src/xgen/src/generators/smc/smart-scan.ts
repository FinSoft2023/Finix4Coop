import * as path from 'path';
import * as fg from 'fast-glob';
import { withBase, withLeadingSlash, withoutTrailingSlash } from 'ufo';

export const GLOB_SMART_CONTRACT_SCAN_PATTERN = '**/*.{ts,smc}';
type FileInfo = { path: string; fullPath: string };

const suffixRegex =
  /\.(connect|delete|get|head|options|patch|post|put|trace)(\.(dev|prod|prerender))?$/;

// prettier-ignore
// biome-ignore format: keep inline for better readability
type MatchedMethodSuffix = "connect" | "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";
type MatchedEnvSuffix = 'dev' | 'prod' | 'prerender';


export async function scanServerRoutes(
  scanDirs: string[],
  dir: string,
  prefix = '/',
) {
  const files = await scanFiles(scanDirs, dir);
  return files.map((file) => {
    let route = file.path
      .replace(/\.[A-Za-z]+$/, '')
      .replace(/\[\.{3}]/g, '**')
      .replace(/\[\.{3}(\w+)]/g, '**:$1')
      .replace(/\[(\w+)]/g, ':$1');
    route = withLeadingSlash(withoutTrailingSlash(withBase(route, prefix)));

    const suffixMatch = route.match(suffixRegex);
    let method: MatchedMethodSuffix | undefined;
    let env: MatchedEnvSuffix | undefined;
    if (suffixMatch?.index) {
      route = route.slice(0, Math.max(0, suffixMatch.index));
      method = suffixMatch[1] as MatchedMethodSuffix;
      env = suffixMatch[3] as MatchedEnvSuffix;
    }

    route = route.replace(/\/index$/, '') || '/';

    return {
      handler: file.fullPath,
      route,
      method,
      env,
    };
  });
}

async function scanFiles(
  scanDirs: string[],
  name: string,
): Promise<FileInfo[]> {
  const files = await Promise.all(
    scanDirs.map((dir) => scanDir(dir, name)),
  ).then((r) => r.flat());
  return files;
}

async function scanDir(dir: string, name: string): Promise<FileInfo[]> {
  const fileNames = await fg(GLOB_SMART_CONTRACT_SCAN_PATTERN, {
    cwd: path.join(dir, name),
    dot: true,
    ignore: [],
    absolute: true,
  });
  return fileNames
    .map((fullPath) => {
      return {
        fullPath,
        path: path.relative(path.join(dir, name), fullPath).replace(/\\/g, '/'),
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}
