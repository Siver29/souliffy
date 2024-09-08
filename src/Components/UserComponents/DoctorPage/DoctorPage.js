import React from 'react';
import Doctor from '../Doctor/Doctor';
import './DoctorPage.css'

const DoctorPage = () => {
    const doctors = [
        {
            name: 'نضال الكيلاني',
            specialization: 'الأخصائي في علم النفس',
            skills: [
                'الخبرة: أكثر من 12 عاماً في في المجال النفسي و التدريب.',
                'التخصص: معالج نفسي متخصص , باحث و مستشار نفسي , مدرب معتمد.',
                'المؤهلات: ماجستير في علم النفس، دبلوم في علم النفس .'
            ],
            imgSrc: 'assets/doctors/Nidal_Al_Kailani.png' 
        },
        {
            name: 'آلاء رنكوسي',
            specialization: 'الأخصائية في علم النفس',
            skills: [
                'الخبرة: أكثر من 9 أعوام في في المجال النفسي.',
                'التخصص: استشارات نفسية  , علاج معرفي سلوكي  , علاج كافة الاضطرابات النفسية والسلوكية , استشارات أسرية.',
                'المؤهلات: دراسات عليا دكتوراه في الصحة النفسية ، دراسات عليا في الإدارة التربوية , بكالوريوس في التربية وعلم النفس , دبلوم في برمجة العقل الباطن  .'
            ],
            imgSrc: 'assets/doctors/Alaa_Rankosy.png' 
        },
        {
            name: 'آية شخاشيرو',
            specialization: 'الأخصائية في علم النفس',
            skills: [
                'الخبرة: أكثر من 5 أعوام في المجال النفسي.',
                'التخصص: استشارات نفسية وعلاج اضطرابات الاكتئاب والقلق والوسواس القهري .',
                'المؤهلات: إجازة في علم النفس , ماجستير في علم نفس النمو ،وساعات تدريبية في مشفى المواساة ومركز الشقيري للعلاج النفسي.'
            ],
            imgSrc: 'assets/doctors/Aya.png' 
        },
        // {
        //     name: 'د. خالد عبد الله',
        //     specialization: 'استشاري الطب النفسي',
        //     skills: [
        //         'الخبرة: 20 عاماً في علاج اضطرابات الشخصية.',
        //         'التخصص: العلاج النفسي باستخدام العلاج الديناميكي.',
        //         'المؤهلات: دكتوراه في الطب النفسي من جامعة بيروت.'
        //     ],
        //     imgSrc: 'assets/svg/doctor3.svg'
        // }
    ];

    return (
        <div className='container-fluid mt-5' id='doctors'>
            <div className='row'>
                {/* <div className="left-doctor-page-triangle col-sm-6 "></div>
                <div className="right-doctor-page-triangle col-sm-6 "></div> */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                    <h3 className='text-center mb-2'>فريقنا الطبي</h3>
                    <p className='text-center fs-5 mb-5'>نؤمن بأن جودة الدعم النفسي تعتمد بشكل كبير على كفاءة وخبرة الأطباء والمختصين الذين يقدمون هذا الدعم. لذلك، حرصنا على بناء فريق من أفضل الأطباء النفسيين وأخصائيي الصحة النفسية ، الذين يمتلكون الخبرة والمعرفة العميقة في مجال الصحة النفسية.</p>
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
