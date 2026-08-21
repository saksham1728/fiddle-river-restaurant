import { motion } from 'framer-motion';
import { MOCK_IMAGES } from '../../data/galleryData';

const FoodCarousel = () => {
  // Get food images from gallery data
  const foodImages = MOCK_IMAGES.filter(img => img.category === 'Food').slice(0, 20);
  
  // Duplicate for seamless loop
  const imagesRow1 = [...foodImages, ...foodImages];
  const imagesRow2 = [...foodImages.slice(10), ...foodImages.slice(10)]; // Start from different position

  return (
    <section className="py-20 bg-obsidian overflow-hidden">
      <div className="space-y-6">
        {/* First Row - Left to Right */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920], // Adjust based on image count
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {imagesRow1.map((image, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative shrink-0 w-[300px] h-[200px] rounded-sm overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-1920, 0], // Opposite direction
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {imagesRow2.map((image, idx) => (
              <div
                key={`row2-${idx}`}
                className="relative shrink-0 w-[300px] h-[200px] rounded-sm overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodCarousel;
