<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">

        <div>
          <h3 class="text-2xl font-bold dark:text-white">
            กรุณาเตรียมเอกสารของคุณเพื่อใช้เครื่องสแกนเอกสาร
          </h3>

          <div class="flex justify-between items-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 24 24">
              <path fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M17 22v-2h3v-3h2v3.5c0 .4-.2.7-.5 1s-.7.5-1 .5zM7 22H3.5c-.4 0-.7-.2-1-.5s-.5-.7-.5-1V17h2v3h3zM17 2h3.5c.4 0 .7.2 1 .5s.5.6.5 1V7h-2V4h-3zM7 2v2H4v3H2V3.5c0-.4.2-.7.5-1s.6-.5 1-.5zm12 9H5v2h14z" />
            </svg>
         
          </div>
        </div>

        <UButton icon="i-mdi-scanner">Scan Paper</UButton>

        <p class="text-lg text-gray-500 dark:text-gray-400 mt-8">
          กรุณาเปิดใช้งานเครื่องสแกนเอกสารของคุณเพื่อสแกน และดำเนินการต่อ
        </p>

      </div>
    </div>
  </section>
</template>
