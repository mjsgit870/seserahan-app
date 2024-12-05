import AdminLayout from "@/layouts/Admin"

export default function SatuanPage() {
  return (
    <div>SatuanPage</div>
  )
}

SatuanPage.layout = (page: any) => <AdminLayout children={page} />