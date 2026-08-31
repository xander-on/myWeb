import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/libraries/neo_brutalist/components/ui/accordion";

type Props = {
  id?: string,
  title: string,
  children: React.ReactNode
}

export const AccordeonItem = ({ id='id-acordeon', title, children }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={id}>
        <AccordionTrigger className="cursor-pointer data-[state=open]:bg-transparent dark:data-[state=open]:text-main">
          <h3 className="text-lg">{ title }</h3>
        </AccordionTrigger>

        <AccordionContent 
          style={{backgroundColor:"transparent"}}
        >
          { children }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}