"use client";
import { useState } from "react";
import dict from "../app/[lang]/dictionaries/ar.json";

import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import TextArea from "@/components/TextArea/TextArea";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";

interface FormState {
  gender: "male" | "female";
  name: string;
  phone: string;
  country: string;
  email: string;
  source: string;
  questionType: string;
  questionBody: string;
  subscribe: boolean;
}

const ContactUsForm: React.FC<{ dictionary: typeof dict }> = ({
  dictionary,
}) => {
  //   const dictionary = await getDictionary("ar");
  const [formState, setFormState] = useState<FormState>({
    country: "",
    email: "",
    gender: "female",
    name: "",
    phone: "",
    questionBody: "",
    questionType: "",
    source: "",
    subscribe: false,
  });

  return (
    <form dir="rtl">
      <section className="flex flex-wrap justify-between gap-2 rounded-lg border border-primary p-8 text-grey">
        <div className="mb-2 flex  w-2/5 items-end gap-2">
          <Dropdown
            className="text-grey"
            choices={[dictionary.home.form.female, dictionary.home.form.male]}
            value={dictionary.home.form[formState.gender]}
            label={dictionary.home.form.name}
            onChange={(newValue) => {
              console.log(newValue);
              if (newValue === dictionary.home.form.male)
                setFormState((oldState) => ({
                  ...oldState,
                  gender: "male",
                }));
              else
                setFormState((oldState) => ({
                  ...oldState,
                  gender: "female",
                }));
            }}
          />
          <Input
            className="grow"
            onChange={(newValue) => {
              setFormState((oldState) => ({
                ...oldState,
                name: newValue,
              }));
            }}
            value={formState.name}
            placeholder={dictionary.home.form.namePlaceholder}
          />
        </div>
        <div className="mb-3 w-2/5">
          <Input
            label={dictionary.home.form.yourNumber}
            value={formState.phone}
            onChange={(newValue) => {
              setFormState((oldState) => ({ ...oldState, phone: newValue }));
            }}
            placeholder={dictionary.home.form.numberPlaceholder}
          />
        </div>
        <div className="mb-3 w-2/5">
          <Input
            label={dictionary.home.form.email}
            value={formState.email}
            onChange={(newValue) => {
              setFormState((oldState) => ({ ...oldState, email: newValue }));
            }}
            placeholder={dictionary.home.form.emailPlaceholder}
          />
        </div>
        <div className="mb-3 w-2/5">
          <Input
            label={dictionary.home.form.source}
            value={formState.source}
            onChange={(newValue) => {
              setFormState((oldState) => ({ ...oldState, source: newValue }));
            }}
            placeholder={dictionary.home.form.source}
          />
        </div>
        <div className="mb-3 w-2/5">
          <Input
            label={dictionary.home.form.questions}
            value={formState.questionType}
            onChange={(newValue) => {
              setFormState((oldState) => ({
                ...oldState,
                questionType: newValue,
              }));
            }}
            placeholder={dictionary.home.form.questions}
          />
        </div>
        <div className="w-full">
          <TextArea
            label={dictionary.home.form.textAreaHeader}
            value={formState.questionBody}
            onChange={(newValue) => {
              setFormState((oldState) => ({
                ...oldState,
                questionBody: newValue,
              }));
            }}
            placeholder={dictionary.home.form.textAreaplaceHolder}
          />
        </div>
        <div className="my-10 flex w-full justify-between">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="h-7 w-7"
              checked={formState.subscribe}
              onChange={(e) => {
                setFormState((oldState) => ({
                  ...oldState,
                  subscribe: e.target.checked,
                }));
              }}
            />
            <Typography variant="label">
              {dictionary.home.form.subscribe}
            </Typography>
          </div>
          <Button onClick={() => {}} className="w-60">
            <Typography variant="button">
              {dictionary.home.form.submit}
            </Typography>
          </Button>
        </div>
      </section>
    </form>
  );
};

export default ContactUsForm;
