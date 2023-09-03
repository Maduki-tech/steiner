import { BsFacebook, BsTiktok, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/steinersec/?locale=de_DE",
      icon: (props: any) => <BsFacebook {...props} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tsssteiner/?hl=de",
      icon: (props: any) => <BsInstagram {...props} />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@steinerthomas1?lang=de-DE",
      icon: (props: any) => <BsTiktok {...props} />,
    },
  ],
};

export default function CTA() {
  return (
    <div className="bg-yellow-200 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-8 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
          Finde uns jetzt auch auf Social Media
          <br />
          <span className="text-yellow-500">
            und bleibe immer auf dem neusten Stand
          </span>
        </h2>
        <div className="mt-10 grid grid-cols-2 mx-auto gap-2 md:grid-cols-3 md:max-w-3xl">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="p-3 bg-yellow-500 rounded-lg hover:bg-yellow-400 transition ease-in-out duration-150"
            >
              <span className="sr-only">{item.name}</span>
              <div className="flex items-center gap-2 justify-center text-white">
                <span className="">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
