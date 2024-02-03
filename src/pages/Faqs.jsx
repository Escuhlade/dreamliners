import React from 'react'
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What Starlight Headliner fits my Car?",
            content: `This is the given answer for the following FAQ`,
        },
        {
            title: "What Is The Best Package For My Vehicle? | How Many Lights Should I Get?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Quantity of Fiber optic lights?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "How do you ensure seamless installation in my vehicle?",
            content: `this is the content`,
        },
        {
          title: "Power of Light Engine? Different Boxes?",
          content: `this is the content`,
      },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "white",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    // tabFocus: true
};


const Faqs = () => {
  return (
    <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
  )
}

export default Faqs
