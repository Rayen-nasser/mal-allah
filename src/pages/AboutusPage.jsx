const AboutusPage = () => {
  return (
    <section className="my-[80px] mx-[7%]">
      <img
        src="./logo.jpg"
        className="rounded-[20px] object-contain w-[200px] m-auto mb-12"
      />
      <h1 className="text-center font-bold text-3xl text-green-900/90">
        “صدقتك تصل للعالم من أي مكان”
      </h1>
      <h4 className="mt-8 text-lg">
        في مال الله، نؤمن بقوة التكافل والتعاون لبناء عالم أفضل. نحن منصة تجمع
        الجمعيات الخيرية من جميع أنحاء الوطن العربي، مما يتيح للمتبرعين الوصول
        إلى مجموعة واسعة من المشاريع والمبادرات الإنسانية. شعارنا، يعكس التزامنا
        بتسهيل عملية التبرع بحيث يمكن لكل فرد أن يساهم في الخير، بغض النظر عن
        مكان تواجده.
      </h4>
      <h3 className="text-green-900 mt-10 mb-3 text-xl">رؤيتنا</h3>
      <h4 className="lg:w-[70%] w-full">
        نسعى لأن نكون الوجهة الأولى للعطاء الخيري، حيث نجمع بين الشفافية
        والكفاءة لضمان وصول التبرعات إلى مستحقيها. نحلم بعالم يسوده العدل
        والمساواة، حيث يتمكن كل إنسان من العيش بكرامة وأمان.
      </h4>
      <h3 className="text-green-900 mt-10 mb-3 text-xl">أهدافنا</h3>
      <ul className="lg:w-[70%] w-full list-disc mr-5">
        <li>تعزيز ثقافة العطاء والمشاركة الاجتماعية.</li>
        <li>توفير منصة موثوقة وسهلة الاستخدام للتبرعات الخيرية.</li>
        <li>دعم المشاريع الخيرية التي تحدث فرقًا حقيقيًا في حياة الناس.</li>
        <li>تشجيع الشراكات بين الجمعيات الخيرية لتحقيق أثر أكبر.</li>
      </ul>
      <h3 className="text-green-900 mt-10 mb-3 text-xl">انضم إلينا</h3>
      <h4 className="lg:w-[70%] w-full">
        كل تبرع، مهما كان صغيرًا، يمكن أن يحدث تغييرًا كبيرًا. ندعوك لتكون جزءًا
        من رحلتنا نحو عالم أكثر إنسانية. سواء كنت فردًا يبحث عن سبيل للمساهمة أو
        جمعية خيرية تسعى لتوسيع نطاق تأثيرها، مال الله هو المكان الذي تلتقي فيه
        النوايا الطيبة بالأفعال العظيمة.
      </h4>
    </section>
  );
};

export default AboutusPage;
