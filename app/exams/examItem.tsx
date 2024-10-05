import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function ExamItem({ examId, name, description, active }) {

  const router = useRouter();

  return (
    <Card className="mt-6 rounded-lg">
      <CardBody>

      <div className="flex items-center justify-between">
      <div className="text-black mb-2 font-bold">Baze podataka 2023/2024</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z"/></svg>
        </div>
        <br></br>
        <Typography variant="h5" className="mb-2 text-black">
          {name}
        </Typography>
        <Typography color="black">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
      <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2" onClick={()=>router.push(`exams/${examId}`)}>
          {/* <Button size="sm" variant="text" className="flex items-center gap-2" onClick={()=>router.push(`submissions`)}> */}
            START EXAM
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        <Typography className="font-normal text-black">120 min.</Typography>
      </CardFooter>
    </Card>
  );
}