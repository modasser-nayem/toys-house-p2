import React from "react";
import useDynamicTitle from "../../utils/useDynamicTitle";

const questions = [
   {
      id: "1",
      question:
         "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
         "A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token. In addition to the new access token, the service may return a new refresh token too. Refresh tokens and access tokens serve very different purposes in the authorization process.",
   },
   {
      id: "2",
      question: "Compare SQL and NoSQL databases?",
      answer:
         "SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.",
   },
   {
      id: "3",
      question: "What is express js? What is Nest JS?",
      answer: `1.Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.
         
         2.NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.`,
   },
   {
      id: "4",
      question: "What is MongoDB aggregate and how does it work?",
      answer:
         "Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.",
   },
];

const Blog = () => {
   useDynamicTitle("Blog");
   return (
      <div className="cs-container py-8 mx-auto w-[90%] md:w-[800px]">
         {questions.map((question) => (
            <div
               key={question.id}
               tabIndex={0}
               className="collapse collapse-arrow border border-base-300 rounded-box my-5"
            >
               <div className="collapse-title text-xl font-bold bg-gray-200">
                  {question.question}
               </div>
               <div className="collapse-content bg-gray-200 text-black">
                  <p className="text-lg font-Lato">{question.answer}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Blog;
