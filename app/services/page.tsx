import { Suspense } from "react"
import { getServices } from "@/app/actions/services"
import { ServiceCard } from "@/components/service-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="text-muted-foreground mt-2">
          We offer a range of services to help businesses leverage modern technology, AI, and automation.
        </p>
      </div>

      <Suspense fallback={<ServicesSkeleton />}>
        <AllServices />
      </Suspense>
    </div>
  )
}

async function AllServices() {
  try {
    const services = await getServices()

    if (services.length === 0) {
      return (
        <Alert>
          <AlertTitle>No services found</AlertTitle>
          <AlertDescription>There are currently no services available. Please check back later.</AlertDescription>
        </Alert>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    )
  } catch (error) {
    console.error("Error fetching services:", error)
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>There was an error fetching the services. Please try again later.</AlertDescription>
      </Alert>
    )
  }
}

function ServicesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
      ))}
    </div>
  )
}
