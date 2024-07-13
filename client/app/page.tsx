import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Slider } from "@nextui-org/slider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card>
        <CardHeader>
          <h1 className={title()}>OPTIMIZE PORTFOLIO</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <form>
            <Slider
              size="md"
              step={1}
              color="foreground"
              label="Risk Tolerance"
              minValue={1}
              maxValue={5}
              defaultValue={3}
              showSteps
            />
            <Slider
              size="md"
              step={1}
              color="foreground"
              label="ESG Consideration"
              minValue={1}
              maxValue={5}
              defaultValue={3}
              showSteps
            />
            <Input type="number" label="Principle" />
          </form>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
