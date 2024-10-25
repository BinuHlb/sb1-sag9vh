import { jobs } from "@/lib/data";
import { JobDetail } from "./components/JobDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === Number(params.id));

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}