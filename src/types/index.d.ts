type ColumnsType<T> = TableProps<T>["columns"];

interface userTableDataType {
  organization: string;
  key: number;
  name: string;
  email: string;
  dateCreated: string;
  status: string;
  phoneNumber: string;
  userId: string;
}

type userType = {
  bvn: string;
  name: string;
  tier: number;
  organization: string;
  accountNumber: string;
  bank: string;
  email: string;
  gender: string;
  status: string;
  userId: string;
  childern: number;

  loanRepayment: number;
  monthlyIncome: {
    max: string;
    min: string;
  };
  employmentStatus: string;
  levelOfEducation: string;
  sectionOfEmployment: string;
  durationOfEmployment: string;

  guarantors: {
    email: string;
    fullName: string;
    phoneNumber: string;
    relationship: string;
  }[];

  dateCreated: string;
  instaHandle: string;
  phoneNumber: string;
  officialMail: string;
  maritalStatus: string;
  residenceType: string;
  twitterHandle: string;
  facebookHandle: string;
};
