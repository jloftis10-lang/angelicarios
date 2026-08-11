import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <Container>
        <h1 className="font-display text-3xl font-semibold text-navy">Page not found</h1>
        <p className="mt-3 text-sm text-slate">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/" className="mt-6">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
