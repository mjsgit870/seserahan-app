import AdminLayout from "@/layouts/Admin"

export default function UsersPage() {
  return (
    <div>UsersPage</div>
  )
}

UsersPage.layout = (page: any) => <AdminLayout children={page} />