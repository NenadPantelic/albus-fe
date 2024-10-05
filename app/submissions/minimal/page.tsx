import Header from "@/components/Header";
import SubmissionList from "@/components/SubmissionList";


export default function Submissions() {
    return (
        <main className="flex h-screen dark bg-black p-4  w-screen flex-col ">
            <Header />
            <SubmissionList/>
        </main>
    )

}