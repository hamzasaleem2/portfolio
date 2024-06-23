import Link from "next/link";
import Header from "./header";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-8">
      <Header />
      <main className="flex-1">
        <div className="container flex flex-col space-y-2">
          <article className="pt-6">
            <div className="space-y-1">
              <h2 className="font-mono text-lg tracking-tighter">projects</h2>
            </div>
            <ul className="space-y-4 py-4">
              <li className="flex flex-col space-y-1.5 !no-underline">
                <Link
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://s3oosh.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Label className="cursor-pointer font-medium underline underline-offset-4 ">
                      S3oosh
                    </Label>
                  </div>
                  <Label className="text-muted-foreground">
                    S3oosh allows users to upload multiple files at once to S3 Buckets
                  </Label>
                </Link>
              </li>
              <li className="flex flex-col space-y-1.5 !no-underline">
                <Link
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Label className="cursor-pointer font-medium underline underline-offset-4 ">
                      biz-insight
                    </Label>
                  </div>
                  <Label className="text-muted-foreground">
                    this application helps generate a detailed reviews report
                    for any business profile on google.
                  </Label>
                </Link>
              </li>
              <li className="flex flex-col space-y-1.5 !no-underline">
                <Link
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://github.com/hamzasaleem2/chatgpt95"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Label className="cursor-pointer font-medium underline underline-offset-4 ">
                      ChatGPT95
                    </Label>
                  </div>
                  <Label className="text-muted-foreground">
                    A chatbot that uses GPT-4o to generate responses to user queries, with windows 95 styling.
                  </Label>
                </Link>
              </li>
              <li className="flex flex-col space-y-1.5 !no-underline">
                <Link
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://github.com/hamzasaleem2/jolt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Label className="cursor-pointer font-medium underline underline-offset-4 ">
                      jolt
                    </Label>
                  </div>
                  <Label className="text-muted-foreground">
                    open-source app that provides a lightweight alternative to
                    zapier, empowering users to automate tasks.
                  </Label>
                </Link>
              </li>
              <li className="flex flex-col space-y-1.5 !no-underline">
                <Link
                  className="flex flex-col space-y-1.5 !no-underline"
                  href="https://pushpdf.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Label className="cursor-pointer font-medium underline underline-offset-4 ">
                      pushpdf.app
                    </Label>
                    <Badge className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-muted text-muted-background">
                      Archived
                    </Badge>
                  </div>
                  <Label className="text-muted-foreground">
                    automatically create and edit pdfs right from zapier
                  </Label>
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </main>
    </div>
  );
}
