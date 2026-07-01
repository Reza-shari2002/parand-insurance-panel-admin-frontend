import { FileText } from "lucide-react";
import { useContext, useState } from "react";
import Insurancecard from "./insurancecard/Insurancecard";
import { useLocation } from "react-router-dom";
import Button_continue from "../common/Button_continue";
import Introduction from "./introduction/Introduction";
import { useEffect } from "react";

const cardsData = [
  {
    id: 1,
    title: "بیمه شخص ثالث",
    desc: "بیمه اجباری برای تمام خودروها",
    icon: FileText,
    isEmpty: false,
    type: "car",
  },
  { id: 2, title: null, desc: null, icon: null, isEmpty: true, type: "" },
  { id: 3, title: null, desc: null, icon: null, isEmpty: true, type: "" },
  { id: 4, title: null, desc: null, icon: null, isEmpty: true, type: "" },
];
import { context } from "../../context/Formcontext";
function Homeholder() {
  const { set_current_page } = useContext(context);
  useEffect(() => {
    set_current_page(0);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { data } = useContext(context);

  console.log(data);
  const [insurance_type, set_insurance_type] = useState("");

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto py-12 px-4 pb-32 md:pb-12">
      <Introduction></Introduction>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 w-full">
        {cardsData.map((data) => (
          <Insurancecard
            key={data.id}
            {...data}
            set_insurance_type={set_insurance_type}
            insurance_type={insurance_type}
          />
        ))}
      </div>

      <Button_continue
        path={insurance_type === "car" ? "/documents" : " "}
        step={0}
      ></Button_continue>
    </div>
  );
}

export default Homeholder;
