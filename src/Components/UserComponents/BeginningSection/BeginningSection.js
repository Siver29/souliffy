import React from 'react'
import Illness from '../Illness/Illness'
import './BeginningSection.css'

const BeginningSection = () => {
    return (
        <div className='container-fluid pt-5 pb-5 beginning-section'>
            <div className='row'>
                <h3 className='text-center'>كيف بدأنا؟</h3>
                <p className='text-center fs-5 mt-1 mb-5'>انطلقنا من إيماننا العميق بضرورة توفير الدعم النفسي المتخصص للمجتمع،
                    خاصة في ظل التحديات الصعبة التي تواجه الأفراد في سوريا.<br />
                    قمنا بإجراء دراسات لجمع البيانات حول الاضطرابات النفسية الأكثر شيوعًا بين الشباب وكانت النتائج كالتالي:
                </p>
                <div className='container illnesses-container'>
                    <div className='row '>
                        <div className='col-lg-3 col-md-3 col-12 mt-5 mb-5 ml-2 illness'>
                            <Illness
                                imageSrc={'assets/svg/illness1.svg'}
                                titleText="الاكتئاب"
                                numberText="6.07 M"
                                backgroundColor="var(--secondary-green-color)"
                                height='300px' />
                        </div>
                        <div className='col-lg-3 col-md-3 col-12 mt-sm-5 mb-5 illness2'>
                            <Illness imageSrc={'assets/svg/illness2.svg'}
                                titleText="القلق"
                                numberText="4.64 M"
                                backgroundColor="var(--primary-blue-color)"
                                height='250px' />
                        </div>
                        <div className='col-lg-3 col-md-3 col-12 mt-md-5 mb-5 illness3'>
                            <Illness imageSrc={'assets/svg/illness3.svg'}
                                titleText="نوبات الهلع"
                                numberText="3.1 M"
                                backgroundColor="var(--secondary-pink-color)"
                                height='200px' />
                        </div>
                        <div className='col-lg-3 col-md-3 col-12 mt-md-5 mb-5 illness4'>
                            <Illness imageSrc={'assets/svg/illness4.svg'}
                                titleText="اضطراب الأكل"
                                numberText="1.1 M"
                                backgroundColor="var(--primary-bg-color)"
                                height='150px' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeginningSection
