import UpworkIcon from "@/components/icons/upwork";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import XIcon from "@/components/icons/x";
import GithubIcon from "@/components/icons/github";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BubbleText from "@/components/BubbleText";
import ContraIcon from "@/components/icons/contra";

export default function Header() {
  return (
    <header className="container">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <Avatar>
              <AvatarImage src="https://www.upwork.com/profile-portraits/c1uW6xm_sRDmacFGmYDGNd8v7WoCS8hUXWVALhPnLo0XyRtCap4cKrngzNR1Xcf_K6" />
              <AvatarFallback>HS</AvatarFallback>
            </Avatar>
            <BubbleText text={"hamzasaleem"} />
            <BubbleText text={"code engineer"} />
          </div>
        </Link>
        <div className="flex items-center space-x-2">
        <Button variant="link" size="icon" asChild>
            <Link href={"https://www.contra.com/hamzasaleem"}>
              <ContraIcon />
            </Link>
          </Button>
          <Button variant="link" size="icon" asChild>
            <Link href={"https://www.upwork.com/freelancers/hamzasaleem"}>
              <UpworkIcon />
            </Link>
          </Button>
          <Button variant="link" size="icon" asChild>
            <Link href={"https://twitter.com/_hamza_saleem"}>
              <XIcon />
            </Link>
          </Button>
          <Button variant="link" size="icon" asChild>
          <Link href={"https://github.com/hamzasaleem2"}>
              <GithubIcon />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
