import { useTranslation } from "react-i18next";
import { PieChart } from "../components/PieChart";
import { useCubeData } from "../cube/context";
import { COLORS, COLORS_LIGHT } from "../utils/constants";

export default function () {
  const { contractTypeData: cubeData } = useCubeData();

  const { t } = useTranslation();

  const labels = cubeData?.map((obj) => obj["QuotesQuote.contractType"]);
  const data = cubeData?.map((obj) =>
    Number.parseInt(obj["QuotesQuote.count"] as string)
  );

  return (
    <PieChart
      title={t("Contract Types")}
      labels={labels}
      datasets={[
        {
          label: t("Status"),
          backgroundColor: COLORS,
          borderColor: COLORS_LIGHT,
          data: data,
        },
      ]}
    />
  );
}
