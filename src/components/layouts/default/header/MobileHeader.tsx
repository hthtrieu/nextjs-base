import { useEffect, useState } from "react";
import { Icon, Menu, SidebarCloseIcon } from "lucide-react";

import DrawerCommon from "@/components/ui/drawer-common";

import { cn } from "../../../../lib/utils";
import Link from "next/link";
import { useEventListener } from "@/hooks/user-event-listener";
import { useTrans } from "@/hooks/useTrans";
import { Constants } from "@/lib/constant";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  const { t } = useTrans();

  const [scrolling, setScrolling] = useState(false);
  useEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  useEffect(() => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, []);
  return (
    <>
      <div className="ml-auto block items-center lg:hidden">
        <button
          onClick={handleOpenMenu}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <DrawerCommon
        position="right"
        open={open}
        className={cn("max-lg:w-[500px]", "max-md:w-full")}
      >
        <div className="flex flex-col gap-[15px] px-[15px]">
          <div className="flex min-h-[32px] justify-between border-b-[1px] py-[10px]">
            <div className="flex flex-col justify-between gap-y-1.5">
              <Link href="/">
                <img
                  src="/assets/icons/logo.jpg"
                  alt="logo"
                  // width={100}
                  // height={100}
                  className="h-16 w-auto rounded-2xl"
                />
              </Link>
              <ul className="flex flex-col items-center gap-x-2">
                {Constants.HEADER_URLS.map(
                  (item: { label: string; href: string }, index) => (
                    <li key={index} className="w-full h-fit min-h-8">
                      <Link
                        href={item?.href}
                        className={cn(
                          "text-base underline-offset-4 hover:text-sky-800 font-bold"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {t(item.label)}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <button onClick={handleOpenMenu}>
              <SidebarCloseIcon fontSize={30} />
            </button>
          </div>
        </div>
      </DrawerCommon>
    </>
  );
};

export default MobileHeader;
