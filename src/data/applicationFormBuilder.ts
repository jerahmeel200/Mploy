export enum ISelectorKeyType {
  Heading = "heading",
  Description = "description",
  TextField = "textfield",
  OpenText = "open_text",
  MultipleChoice = "multiple_choice",
  SelectOne = "select_one",
  YesNo = "yes_no",
  Email = "email",
  Date = "date",
  Time = "time",
  DateTime = "date_time",
  FileUpload = "file_upload",
}

export interface IBlockSubOption {
  subOptionId?: string;
  score?: number;
  isAnEliminatoryOption?: boolean;
  label?: string;
}

export interface IBlockOption {
  optionId?: string;
  required?: boolean;

  label?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  fullWidth?: boolean;
  optionType?:
    | "heading"
    | "description"
    | "textfield"
    | "open_text"
    | "multiple_choice"
    | "yes_no"
    | "email"
    | "select_one"
    | "date"
    | "time"
    | "date_time"
    | "file_upload";
  hasSubOptions?: boolean;
  subOptions?: IBlockSubOption[];
  readOnly?: boolean; // mostly applies to IBlockOption that is set by default when adding anew recruitment from the backend for e.g personal details (name, email, phone e.t.c)
  dbKey?: string; // only applies to readOnly fields that will have unique dbKey when stored in db
}

export interface IBlock {
  id?: string;
  showScore?: boolean;
  options?: IBlockOption[];
}

export interface ISelector {
  id?: string;
  optionType?:
    | "heading"
    | "description"
    | "textfield"
    | "open_text"
    | "multiple_choice"
    | "yes_no"
    | "email"
    | "select_one"
    | "date"
    | "time"
    | "date_time"
    | "file_upload";
  title?: string;
  icon?: string;
  userCanInput?: boolean;
  hasSubOptions?: boolean;
}

export const configureDefaultYesOrNoSubOptions = ({
  optionId,
}: {
  optionId?: string;
}) => {
  return [
    {
      label: "Yes",
      score: 0,
      subOptionId:
        new Date().getTime().toString() + "-" + optionId + "-" + "Yes",
    },
    {
      label: "No",
      score: 0,
      subOptionId:
        new Date().getTime().toString() + "-" + optionId + "-" + "No",
    },
  ];
};
