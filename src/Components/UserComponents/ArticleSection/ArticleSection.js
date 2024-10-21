import React, { useState } from 'react'
import Article from '../Article/Article'
import './ArticleSection.css'
import { articles } from '../../../data/articles';

const ArticleSection = () => {

  const [visibleArticles, setVisibleArticles] = useState(3);
  const [showMore, setShowMore] = useState(false);

  //   {
  //     id: 1,
  //     img: 'assets/svg/article1.svg',
  //     title: 'متلازمة المحتال .. الخوف من الفشل في ظل النجاح',
  //     content: (
  //       <div>
  //         <p>اضطراب ما بعد الصدمة (PTSD) هو حالة نفسية خطيرة تتطلب دعمًا ومعالجة متخصصة. في هذه المقالة، نناقش الخطوات والمراحل المختلفة في رحلة الشفاء من PTSD، ونقدم نصائح للمساعدة في التغلب على الصعوبات المرتبطة بهذه الحالة.</p>
  //         <ul>
  //           <li>العلاج النفسي</li>
  //           <li>العلاج بالأدوية</li>
  //           <li>الدعم الاجتماعي</li>
  //         </ul>
  //       </div>
  //     )
  //   },
  //   {
  //     id: 2,
  //     img: 'assets/svg/article2.svg',
  //     title: 'رحلة الشفاء من اضطراب ما بعد الصدمة',
  //     content: (
  //       <div>
  //         <p>اضطراب ما بعد الصدمة (PTSD) هو حالة نفسية خطيرة تتطلب دعمًا ومعالجة متخصصة. في هذه المقالة، نناقش الخطوات والمراحل المختلفة في رحلة الشفاء من PTSD، ونقدم نصائح للمساعدة في التغلب على الصعوبات المرتبطة بهذه الحالة.</p>
  //         <ul>
  //           <li>العلاج النفسي</li>
  //           <li>العلاج بالأدوية</li>
  //           <li>الدعم الاجتماعي</li>
  //         </ul>
  //       </div>
  //     )
  //   },
  //   {
  //     id: 3,
  //     img: 'assets/svg/article3.svg',
  //     title: ' كيف تتعامل مع اضطراب القلق',
  //     content: (
  //       <div>
  //         <p>يعاني الكثير من الأشخاص من اضطرابات القلق التي تؤثر على حياتهم اليومية. في هذه المقالة، نستعرض بعض الاستراتيجيات الفعّالة للتعامل مع القلق:</p>
  //         <ul>
  //           <li>تمارين التنفس العميق</li>
  //           <li>تقنيات التأمل</li>
  //           <li>الاسترخاء</li>
  //         </ul>
  //       </div>
  //     )
  //   }
  // ];


  // const handleToggleArticles = () => {
  //   if (showMore) {
  //     setVisibleArticles(3);
  //   } else {
  //     setVisibleArticles(articles.length);
  //   }
  //   setShowMore(!showMore);
  // };

  const handleToggleArticles = () => {
    setVisibleArticles(showMore ? 3 : articles.length);
    setShowMore(!showMore);
  };

  return (
    <div className='container article-page mt-5 mb-5' id='articles'>
      <div className='row'>
        <h3 className='text-center'>مقالات</h3>
        <p className='text-center fs-5 mt-1'>نقدم لك مجموعة من المقالات المتخصصة التي تغطي مواضيع متنوعة تهمك وتساعدك على فهم نفسك بشكل أفضل والتغلب على التحديات النفسية.</p>
        <div className='container'>
          <div className='row'>
            {articles.slice(0, visibleArticles).map((article, index) => (
              <div
                className='col-md-4 col-12 mt-5' key={index}>
                <Article img={article.img} title={article.title} content={article.content} id={article.id} brief={article.brief}/> 
              </div>
            ))}
          </div>
          <div className='text-center'>
            <button className='btn border-0 mt-4' onClick={handleToggleArticles}>
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleSection
