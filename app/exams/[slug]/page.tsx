"use client";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import axios from "axios";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

import Header from "@/components/Header";
import { Editor } from "@monaco-editor/react";
import CodeSnippet from "@/components/ui/code-snippet";
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

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty == "easy") {
      return "text-green-500";
    } else if (difficulty == "medium") {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const getQuestions = async () => {
    try {
      // const result = await axios.get(
      //   process.env.NEXT_PUBLIC_API_URL + "/questions/get"
      // );

      const codeSnippets = [
        {'lang': 'python', 'langSlug': 'py', 'code': 'print("Hello World")'},
        {'lang': 'javascript', 'langSlug': 'js', 'code': 'console.log("Hello World")'},
        {'lang': 'sql', 'langSlug': 'sql', 'code': 'SELECT * FROM student'},
      ]

      const testCases = [
        {'input': '123', 'output': 'true'},
        {'input': '1235', 'output': 'false'},
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
        }
     
        
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
    <main className="flex h-screen dark bg-black p-4  w-screen flex-col ">
      <Header />
      <div className="flex gap-8 text-white p-12">
        <div className="flex-[8] w-full">
        <div className="text-[2rem] tracking-widest ">Kolokvijum 2023/2024. </div>

          <span className="text-[1rem] tracking-widest ">Na osnovu seme baze podataka date u sledecem fajlu, odraditi sledece zadatke: </span>
          <pre>
        <code className="javascript" style={{ background: "transparent" }}>
          {` 
          create database 123;
          insert into...<br>
          insert into...<br>
          insert into...<br>
          insert into...<br>
          insert into...<br>
          `}
        </code>
      </pre>

          {/* <CodeSnippet codeContent="
          create database 123;
          insert into...<br>
          insert into...<br>
          insert into...<br>
          insert into...<br>
          insert into...<br>
          
          "></CodeSnippet> */}
          <div className="w-full flex mt-12 mb-2">
            <span className="w-[40%] text-[1.25rem] pl-3 tracking-widest text-gray-600">
              Title
            </span>
            <span className="w-[40%] text-[1.25rem] pl-3 tracking-widest text-gray-600">
              Attempts
            </span>
            <span className="w-[40%] text-[1.25rem] pl-3 tracking-widest text-gray-600">
              Score
            </span>
            {/* <span className="w-[20%] text-[1.25rem] tracking-widest text-gray-600"></span> */}
          </div>

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
                <div
                  className={cn(
                    i % 2 == 0 ? "bg-gray-500" : "",
                    "py-[10px] w-full flex bg-opacity-30 text-gray-300 px-2"
                  )}
                >
                  <Link
                    href={`/question/${item["title-slug"]}`}
                    className="w-full pl-2"
                  >
                    {item.title}
                  </Link>
                  <span
                    className={cn(
                      getDifficultyColor(item.level),
                      "w-[40%] capitalize "
                    )}
                  >
                    {item.level}
                  </span>
                  {/* <span className="w-[20%] text-opacity-40 cursor-pointer">
                    <MoreVertical />
                  </span> */}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
