import { auth, OrganizationSwitcher } from "@clerk/nextjs";

const OrganizationPage = () => {
  const {} = auth();

  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default OrganizationPage;
