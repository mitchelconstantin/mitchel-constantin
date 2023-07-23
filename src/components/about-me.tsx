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
    <Code
      colorScheme="blue"
      style={{ padding: "8px" }}
      width='100%'
    >
      {lines.map((line, i) => (
        <CodeLine text={`${i + 1}. ${line}`} />
      ))}
    </Code>
  );
};
