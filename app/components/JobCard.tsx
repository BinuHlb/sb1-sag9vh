import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Job } from "@/lib/types";

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary-foreground px-3 py-1 bg-primary rounded-full">
            {job.type}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {job.title}
        </h3>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">{job.salary}</span>
          <Link href={`/jobs/${job.id}`}>
            <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}