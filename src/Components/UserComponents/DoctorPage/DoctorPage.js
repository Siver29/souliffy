import React from 'react';
import Doctor from '../Doctor/Doctor';
import './DoctorPage.css'

const DoctorPage = () => {
    const doctors = [
        {
            name: 'د. أحمد الخطيب',
            specialization: 'استشاري الطب النفسي',
            skills: [
                'الخبرة: أكثر من 15 عاماً في علاج اضطرابات المزاج والقلق.',
                'التخصص: علاج الاكتئاب واضطرابات القلق باستخدام العلاج السلوكي المعرفي.',
                'المؤهلات: دكتوراه في الطب النفسي من جامعة دمشق، زمالة الكلية الملكية للأطباء النفسيين.'
            ],
            imgSrc: 'assets/svg/doctor1.svg' // Replace with the correct image path
        },
        {
            name: 'د. سارة محمد',
            specialization: 'استشارية الطب النفسي',
            skills: [
                'الخبرة: أكثر من 10 سنوات في علاج اضطرابات النوم.',
                'التخصص: علاج اضطرابات النوم باستخدام تقنيات العلاج السلوكي المعرفي.',
                'المؤهلات: دكتوراه في الطب النفسي من جامعة القاهرة.'
            ],
            imgSrc: 'assets/svg/doctor2.svg' // Replace with the correct image path
        },
        {
            name: 'د. خالد عبد الله',
            specialization: 'استشاري الطب النفسي',
            skills: [
                'الخبرة: 20 عاماً في علاج اضطرابات الشخصية.',
                'التخصص: العلاج النفسي باستخدام العلاج الديناميكي.',
                'المؤهلات: دكتوراه في الطب النفسي من جامعة بيروت.'
            ],
            imgSrc: 'assets/svg/doctor3.svg' // Replace with the correct image path
        }
    ];

    return (
        <div className='container-fluid'>
            <div className='row'>
                {/* <div className="left-doctor-page-triangle col-sm-6 "></div>
                <div className="right-doctor-page-triangle col-sm-6 "></div> */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                    <h3 className='text-center'>فريقنا الطبي</h3>
                    <p className='text-center fs-5 mt-1'>نؤمن بأن جودة الدعم النفسي تعتمد بشكل كبير على كفاءة وخبرة الأطباء والمختصين الذين يقدمون هذا الدعم. لذلك، حرصنا على بناء فريق من أفضل الأطباء النفسيين وأخصائيي الصحة النفسية ، الذين يمتلكون الخبرة والمعرفة العميقة في مجال الصحة النفسية.</p>
                </div>
                <div className='col-12'>
                {doctors.map((doctor, index) => (
                    <div key={index} className='mb-5'>
                        <Doctor
                            name={doctor.name}
                            specialization={doctor.specialization}
                            skills={doctor.skills}
                            imgSrc={doctor.imgSrc}
                        />
                    </div>
                ))}
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorPage;
