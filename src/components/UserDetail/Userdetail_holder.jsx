import { useParams } from "react-router-dom";
import useUserdetail from '../../hooks/UserDetail/useUserdetail';
import SecureDocumentCard from './SecureDocumentCard/SecureDocumentCard';
import UserDetailTextCard from './UserDetailTextCard/UserDetailTextCard.';

function Userdetail_holder() {
    const { id } = useParams();
    const { data, loading } = useUserdetail(id);

    if (loading) return <div className="p-8 text-center">در حال بارگذاری...</div>;
    if (!data) return <div className="p-8 text-center text-red-500">اطلاعاتی یافت نشد.</div>;

    return (
        <div className="p-4 md:p-8 space-y-10 bg-gray-50 min-h-screen" dir="rtl">
            
            {/* بخش اول: اطلاعات پایه و متنی */}
            <section>
                <div className="flex items-center gap-2 mb-4 border-r-4 border-orange-500 pr-3">
                    <h2 className="text-xl font-bold text-gray-800">اطلاعات پایه کاربر</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <UserDetailTextCard value={data.full_name} title="نام و نام خانوادگی" />
                    <UserDetailTextCard value={data.phone_number} title="شماره تماس" />
                    <UserDetailTextCard value={data.plate_history_code} title="کد تاریخچه پلاک" />
                    <UserDetailTextCard value={data.postal_code} title="کد پستی" />
                    <div className="md:col-span-2 lg:col-span-2">
                        <UserDetailTextCard value={data.address} title="آدرس دقیق محل سکونت" type="address" />
                    </div>
                </div>
            </section>

            {/* بخش دوم: مدارک و تصاویر */}
            <section>
                <div className="flex items-center gap-2 mb-4 border-r-4 border-blue-600 pr-3">
                    <h2 className="text-xl font-bold text-gray-800">تصاویر و مدارک آپلود شده</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <SecureDocumentCard title="تصویر کارت ملی" imageUrl={data.national_id_image_url} />
                    <SecureDocumentCard title="برگه سبز" imageUrl={data.green_paper_image_url} />
                    <SecureDocumentCard title="کارت ماشین (روی کارت)" imageUrl={data.car_card_image_front_url} />
                    <SecureDocumentCard title="کارت ماشین (پشت کارت)" imageUrl={data.car_card_image_back_url} />
                    <SecureDocumentCard title="بیمه نامه قبلی" imageUrl={data.prev_insurance_image_url} />
                    <SecureDocumentCard title="تصویر تاریخچه پلاک" imageUrl={data.plate_history_image_url} />
                    <SecureDocumentCard title="الحاقیه بیمه نامه قبلی" imageUrl={data.endorsement_image_url} />
                    
                    {/* مدارک شناسایی تکمیلی */}
                    <SecureDocumentCard title="صفحه اول شناسنامه شخص" imageUrl={data.relationship_docs1_image_person1_url} />
                    <SecureDocumentCard title="صفحه دوم شناسنامه شخص" imageUrl={data.relationship_docs2_image_person1_url} />
                    <SecureDocumentCard title="صفحه اول شخص مورد نظر" imageUrl={data.relationship_docs1_image_person2_url} />
                    <SecureDocumentCard title="صفحه دوم شخص مورد نظر" imageUrl={data.relationship_docs2_image_person2_url} />
                </div>
            </section>
        </div>
    );
}

export default Userdetail_holder;
