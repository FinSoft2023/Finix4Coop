// This function is executed before instantiating the app
// only in client-side.

// import NPM version LIFF JS SDK
// import liff from "@line/liff";

export default defineNuxtPlugin(() => {
//   // execute liff.init()
//   const initResult = liff
//     .init({ liffId: "2004942311-25EXrgMw" })
//     .then(() => {
//       // console.log("liff.init() done");
//     })
//     .catch((error) => {
//       console.log(`liff.init() failed: ${error}`);
//       // if (!process.env.liffId) {
//       //   console.info(
//       //     "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
//       //   );
//       // }
//       return Promise.reject(error);
//     });

//   // You can access liff.init()'s return value (Promise object)
//   // as this.$liffInit() by inject()

//   return {
//     provide: {
//       liff,
//       liffInitResult: initResult,
//     },
//   };
});