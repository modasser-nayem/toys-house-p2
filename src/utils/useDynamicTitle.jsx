// useDocumentTitle.js
import { useRef, useEffect } from "react";

const useDynamicTitle = (title, prevailOnUnmount = false) => {
   const defaultTitle = useRef(document.title);

   useEffect(() => {
      document.title = "Toy House | " + title;
   }, [title]);

   useEffect(
      () => () => {
         if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
         }
      },
      []
   );
};

export default useDynamicTitle;
