import { useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames";

function useIsFirstRender() {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}

const ExpandableText = ({ children }) => {
  const sectionRef = useRef(null);
  const expandedRef = useRef(null);
  const collapsedRef = useRef(null);
  const heightCacheRef = useRef({});
  const [sectionHeight, setSectionHeight] = useState("auto");
  const isFirstRender = useIsFirstRender();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
    console.log(expandedRef.current, collapsedRef.current);
  };

  return (
    <div className="flex flex-col">
      <motion.section
        ref={sectionRef}
        className="relative"
        animate={{ height: sectionHeight }}
        style={{ overflow: "hidden" }}
        transition={{
          duration: isExpanded ? 0.4 : 0.8,
          ease: isExpanded ? [0.28, 0.5, 0.3, 0.1] : [0.20, 0.52, 0.4, 0.98],
        }}
      >
        <AnimatePresence mode="popLayout">
          {isExpanded ? (
            <motion.div
              ref={collapsedRef}
              key="content-expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute"
              onAnimationStart={() => {
                if (!heightCacheRef.current.expanded) {
                  heightCacheRef.current.expanded =
                    sectionRef.current.lastChild.clientHeight;
                }
                if (isExpanded) {
                  setSectionHeight(heightCacheRef.current.expanded);
                }
              }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              ref={expandedRef}
              key="content-collapsed"
              className={classNames(
                {
                  "line-clamp-6": !isExpanded,
                  absolute: !isFirstRender,
                },
                "overflow-hidden",
                "expandable-text"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onAnimationStart={() => {
                if (!heightCacheRef.current.collapsed) {
                  heightCacheRef.current.collapsed =
                    sectionRef.current.lastChild.clientHeight;
                }
                if (!isExpanded) {
                  setSectionHeight(heightCacheRef.current.collapsed);
                }
              }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <button
        className="text-blue-500 border-blue-500 mt-2 border border-dashed rounded py-1 text-sm font-light hover:bg-slate-100 transition-colors"
        onClick={toggleIsExpanded}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ExpandableText;
