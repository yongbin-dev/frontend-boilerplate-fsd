import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import icon404 from "@/6_shared/assets/images/icon404.png";

export function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <img src={icon404} alt="404" width={100} height={100} />
      <Result
        status="404"
        title="404"
        subTitle={t("main:message:001")}
        extra={
          <Button type="primary" onClick={() => navigate(-1)}>
            {t("main:button:back")}
          </Button>
        }
      />
    </>
  );
}
