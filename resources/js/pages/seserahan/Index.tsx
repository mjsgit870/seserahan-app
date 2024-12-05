import AdminLayout from "@/layouts/Admin"

export default function SeserahanPage() {
  return (
    <div>SeserahanPage</div>
  )
}

SeserahanPage.layout = (page: any) => <AdminLayout children={page} />