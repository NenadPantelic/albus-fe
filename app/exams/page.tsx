"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

import Header from "@/components/Header";
import {ExamItem} from "./examItem";

interface CodeSnippet {
  lang: string;
  langSlug: string;
  code: string;
}

interface TestCase {
  input: string;
  expectedOutput: string;
}

interface Question {
  _id: string;
  level: string;
  topics: string[];
  companies: string[];
  title: string;
  "title-slug": string;
  likes: number;
  dislikes: number;
  content: string;
  codeSnippets: CodeSnippet[];
  testCases: TestCase;
  __v: number;
}

export default function Exam() {
  const [loading, setLoading] = React.useState<boolean>(true);

  const categories = [
    { name: "Array", count: 1374 },
    { name: "String", count: 612 },
    { name: "Hash Table", count: 472 },
    { name: "Math", count: 429 },
    { name: "Dynamic Programming", count: 428 },
    { name: "Sorting", count: 315 },
    { name: "Greedy", count: 307 },
    { name: "Depth-First Search", count: 274 },
    { name: "Database", count: 225 },
    { name: "Binary Search", count: 224 },
    { name: "Breadth-First Search", count: 218 },
    { name: "Tree", count: 214 },
    { name: "Matrix", count: 196 },
    { name: "Two Pointers", count: 171 },
    { name: "Binary Tree", count: 169 },
    { name: "Bit Manipulation", count: 161 },
    { name: "Heap (Priority Queue)", count: 142 },
    { name: "Stack", count: 141 },
    { name: "Graph", count: 128 },
    { name: "Prefix Sum", count: 127 },
  ];

  const [questions, setQuestions] = React.useState<Question[]>([]);



  const getQuestions = async () => {
    try {
      // const result = await axios.get(
      //   process.env.NEXT_PUBLIC_API_URL + "/questions/get"
      // );

      const codeSnippets = [
        { 'lang': 'python', 'langSlug': 'py', 'code': 'print("Hello World")' },
        { 'lang': 'javascript', 'langSlug': 'js', 'code': 'console.log("Hello World")' },
      ]

      const testCases = [
        { 'input': '123', 'output': 'true' },
        { 'input': '1235', 'output': 'false' },
      ]

      const localQuestions = [
        {
          "_id": "test-1",
          "level": "level-1",
          "topics": ["Graph"],
          "companies": ["Microsoft"],
          "title": "test-1",
          "title-slug": "test-1",
          "likes": 0,
          "dislikes": 0,
          "content": "First question test 1",
          "codeSnippets": codeSnippets,
          "testCases": testCases,
          "_v": 1
        },
        {
          "_id": "test-2",
          "level": "level-1",
          "topics": ["Graph"],
          "companies": ["Microsoft"],
          "title": "test-1",
          "title-slug": "test-1",
          "likes": 0,
          "dislikes": 0,
          "content": "First question test 1",
          "codeSnippets": codeSnippets,
          "testCases": testCases,
          "_v": 1
        },
        {
          "_id": "test-34",
          "level": "level-1",
          "topics": ["Graph"],
          "companies": ["Microsoft"],
          "title": "test-1",
          "title-slug": "test-1",
          "likes": 0,
          "dislikes": 0,
          "content": "First question test 1",
          "codeSnippets": codeSnippets,
          "testCases": testCases,
          "_v": 1
        },
        {
          "_id": "test-34",
          "level": "level-1",
          "topics": ["Graph"],
          "companies": ["Microsoft"],
          "title": "test-1",
          "title-slug": "test-1",
          "likes": 0,
          "dislikes": 0,
          "content": "First question test 1",
          "codeSnippets": codeSnippets,
          "testCases": testCases,
          "_v": 1
        },

      ]
      setQuestions(localQuestions);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <main className="flex dark bg-black p-10  w-screen flex-col ">
      <Header />
      <span className="text-[2rem] tracking-widest text-white">Exams </span>
      <div className="flex gap-8 text-white p-12">
          {loading ? (
            <>
              {Array.from({ length: 5 }).map((item, i) => (
                <div
                  className={cn(
                    i % 2 == 0 ? "" : "",
                    "py-[10px] w-full flex justify-between bg-opacity-30 text-gray-300 px-2"
                  )}
                >
                  <Skeleton className="w-[60%] h-[20px]" />
                  <Skeleton className="w-[20%] h-[20px]" />
                  <Skeleton className="w-[10%] h-[20px]" />
                </div>
              ))}
            </>
          ) : (
            <>
              {questions?.map((item, i) => (
                <ExamItem examId = {item._id} name={item.title} description="Prvi kolokvijum iz Baza podataka 2023/2024" active={item.title.length % 2 == 0}></ExamItem>
              ))}
            </>
          )}

      </div>
    </main>
  );
}
