import React from 'react'
import Article from '../Article/Article'
import './ArticlePage.css'

const ArticlePage = () => {

    const articles = [
        {
          img: 'assets/svg/article1.svg',
          title: 'الاكتئاب: فهم أعمق للطبيعة والعلاج',
          text: 'الاكتئاب هو أكثر من مجرد شعور بالحزن. هو اضطراب نفسي معقد يمكن أن يؤثر بشكل كبير على الحياة اليومية. في هذا المقال، نستعرض الأسباب المحتملة للاكتئاب، ونناقش العلاجات المتاحة، من الأدوية إلى العلاجات النفسية.'
        },
        {
          img: 'assets/svg/article2.svg',
          title: 'رحلة الشفاء من اضطراب ما بعد الصدمة',
          text: 'اضطراب ما بعد الصدمة (PTSD) هو حالة نفسية خطيرة تتطلب دعمًا ومعالجة متخصصة. في هذه المقالة، نناقش الخطوات والمراحل المختلفة في رحلة الشفاء من PTSD، ونقدم نصائح للمساعدة في التغلب على الصعوبات المرتبطة بهذه الحالة.'
        },
        {
          img: 'assets/svg/article3.svg',
          title: ' كيف تتعامل مع اضطراب القلق',
          text: 'يعاني الكثير من الأشخاص من اضطرابات القلق التي تؤثر على حياتهم اليومية. في هذه المقالة، نستعرض بعض الاستراتيجيات الفعّالة للتعامل مع القلق، بما في ذلك تمارين التنفس العميق وتقنيات التأمل والاسترخاء.'
        }
      ];

      
  return (
    <div className='container article-page mt-5 mb-5' id='articles'>
        <div className='row'>
            <h3 className='text-center'>مقالات</h3>
            <p className='text-center fs-5 mt-1'>نقدم لك مجموعة من المقالات المتخصصة التي تغطي مواضيع متنوعة تهمك وتساعدك على فهم نفسك بشكل أفضل والتغلب على التحديات النفسية.</p>
            <div className='container'>
            <div className='row'>
            {articles.map((article, index) => (
              <div className='col-md-4 col-12 mt-5' key={index}>
                <Article
                  img={article.img}
                  title={article.title}
                  text={article.text}
                />
              </div>
            ))}
          </div>
            </div>
        </div>
    </div>
  )
}

export default ArticlePage
