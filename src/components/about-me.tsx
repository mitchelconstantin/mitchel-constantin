import { Code } from "@chakra-ui/react";

const CodeLine = ({ text }: { text: string }) => (
  <div style={{ float: "left", clear: "left" }}>{text}</div>
);

const lines = [
  `Hi, I'm Mitchel`,
  `I am an experienced full stack web developer`,
];

export const AboutMe = () => {
  return (
    <Code>
      {lines.map((line, i) => (
        <CodeLine text={`${i + 1}. ${line}`} />
      ))}
    </Code>
  );
};
