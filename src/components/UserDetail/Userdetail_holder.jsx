import {getuserdetail}  from '../../services/UserDetailservice'
import { useEffect  , useState } from 'react';
import {  useParams } from "react-router-dom";
import useUserdetail from '../../hooks/UserDetail/useUserdetail';
import SecureDocumentCard from './SecureDocumentCard/SecureDocumentCard';
import UserDetailTextCard from './UserDetailTextCard/UserDetailTextCard.';
function Userdetail_holder(){
    const {id} = useParams()
    const {data  , set_data , loading , set_loading} = useUserdetail(id)
    
    return(<>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        
      <UserDetailTextCard value={data.address} title={" آدرس"} ></UserDetailTextCard>
      
      <UserDetailTextCard value={data.full_name} title={"نام و نام خانوادگی"} ></UserDetailTextCard>
            <SecureDocumentCard title="تصویر کارت ملی" imageUrl={data.national_id_image_url}></SecureDocumentCard>

      <SecureDocumentCard 
        title="کارت ماشین (روی کارت)" 
        imageUrl={data.car_card_image_front_url}
      />
      
      <SecureDocumentCard 
        title="کارت ماشین (پشت کارت)" 
        imageUrl={data.car_card_image_back_url}
      />

            <SecureDocumentCard title="برگه سبز" imageUrl={data.green_paper_image_url}></SecureDocumentCard>
            <SecureDocumentCard title="بیمه نامه قبلی" imageUrl={data.prev_insurance_image_url}></SecureDocumentCard>
            <SecureDocumentCard title="تصویر تاریخچه پلاک" imageUrl={data.plate_history_image_url}></SecureDocumentCard>
            <SecureDocumentCard title="الحاقیه بیمه نامه قبلی" imageUrl={data.endorsement_image_url}></SecureDocumentCard>
            <SecureDocumentCard title="صفحه اول شناسنامه شخص" imageUrl={data.relationship_docs1_image_person1_url}></SecureDocumentCard>
                        <SecureDocumentCard title="صفحه دوم شناسنامه شخص" imageUrl={data.relationship_docs2_image_person1_url}></SecureDocumentCard>
                        <SecureDocumentCard title="صفحه اول شخص مورد نظر" imageUrl={data.relationship_docs1_image_person2_url}></SecureDocumentCard>
                        <SecureDocumentCard title="صفحه دوم شخص مورد نظر" imageUrl={data.relationship_docs2_image_person2_url}></SecureDocumentCard>



    </div>
    
    </>)
}


export default Userdetail_holder;