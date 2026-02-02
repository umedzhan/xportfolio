import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[60vh] text-white">
        <h1 className="text-4xl font-bold text-[#f53003]">404</h1>
        <p className="text-lg">{t("page_not_found")}</p>
      </div>
    </Layout>
  );
};

export default NotFound;
