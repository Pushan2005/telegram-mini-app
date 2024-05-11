import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { getContractEvents } from "@/lib/actions";


// Event 10
// - Address: 1.4266721422752831e+48
// - Topics: 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef, 0x0000000000000000000000000000000000000000000000000000000000000000, 0x00000000000000000000000092be9a3f9f5b3ba7d8d18430723d3c4f82539e74, 0x0000000000000000000000000000000000000000000000000000000000000008
// - Data: NaN
// - Block Number: 14263435
// - Block Hash: 4.2092739499519154e+76
// - Timestamp: 1645633855
// - Gas Price: 0x1091ffe22c
// - Gas Used: 103660
// - Log Index: 222
// - Transaction Hash: 8.543316231391533e+76
// - Transaction Index: 236

export default function Home() {
  const apiKey = 'DDB9PFHRN8XHCCCDNNAXCP8K7N6MFZZCHJ';
  
  return (
    <Button onClick={getContractEvents}>Click me</Button>
  );
}
