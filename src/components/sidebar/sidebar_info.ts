import { DetailedHTMLProps, FC, SVGProps } from "react";
import {
  Bank,
  BarChart,
  Briefcase,
  Clipboard,
  Coin,
  Fees,
  Guarantors,
  HandShake,
  Home,
  Loan,
  LoanRequest,
  PiggyBank,
  Scroll,
  Services,
  Slider,
  Transaction,
  UserCheck,
  UserSet,
  UserTimes,
  Users,
} from "../../assets";

interface sidebarInfoTypes {
  withDropdown: boolean;
  heading: string;
  links: {
    name: string;
    icon: FC<DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>>;
    link: string;
  }[];
}
export const sidebarInfo: sidebarInfoTypes[] = [
  {
    withDropdown: true,
    heading: "swich oranization",
    links: [
      {
        name: "dashboard",
        icon: Home,
        link: "/",
      },
    ],
  },
  {
    withDropdown: false,
    heading: "customers",
    links: [
      {
        name: "users",
        icon: Users,
        link: "users",
      },
      {
        name: "guarantors",
        icon: Guarantors,
        link: "/",
      },
      {
        name: "loans",
        icon: Loan,
        link: "/",
      },
      {
        name: "decision modals",
        icon: HandShake,
        link: "/",
      },
      {
        name: "savings",
        icon: PiggyBank,
        link: "/",
      },
      {
        name: "loan requests",
        icon: LoanRequest,
        link: "/",
      },
      {
        name: "whitelist",
        icon: UserCheck,
        link: "/",
      },
      {
        name: "karma",
        icon: UserTimes,
        link: "/",
      },
    ],
  },
  {
    withDropdown: false,
    heading: "businesses",
    links: [
      {
        name: "organizations",
        icon: Briefcase,
        link: "/",
      },
      {
        name: "loan products",
        icon: LoanRequest,
        link: "/",
      },
      {
        name: "savings productions",
        icon: Bank,
        link: "/",
      },
      {
        name: "fees and charges",
        icon: Coin,
        link: "/",
      },
      {
        name: "transactions",
        icon: Transaction,
        link: "/",
      },
      {
        name: "services",
        icon: Services,
        link: "/",
      },
      {
        name: "service account",
        icon: UserSet,
        link: "/",
      },
      {
        name: "settlements",
        icon: Scroll,
        link: "/",
      },
      {
        name: "reports",
        icon: BarChart,
        link: "/",
      },
    ],
  },
  {
    withDropdown: false,
    heading: "settings",
    links: [
      {
        name: "preferences",
        icon: Slider,
        link: "/",
      },
      {
        name: "fees and pricings",
        icon: Fees,
        link: "/",
      },
      {
        name: "audit logs",
        icon: Clipboard,
        link: "/",
      },
    ],
  },
];
