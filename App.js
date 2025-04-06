import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const concepts = [
  {
    id: 1,
    title: "God's Love and Creation",
    description: "God created everything out of love and made humans in His image.",
    keyPoints: [
      "God is the Creator of everything",
      "Humans are made in God's image",
      "God's love is unconditional",
      "Creation reflects God's glory"
    ],
    bibleVerse: '"For God so loved the world, that he gave his only Son..." - John 3:16'
  },
  {
    id: 2,
    title: "The Fall of Man and Sin",
    description: "Through Adam and Eve's disobedience, sin entered the world.",
    keyPoints: [
      "Original sin affects all humanity",
      "Sin separates us from God",
      "God's law reveals our sin",
      "We need a Savior"
    ],
    bibleVerse: '"For all have sinned and fall short of the glory of God" - Romans 3:23'
  },
  {
    id: 3,
    title: "Jesus Christ",
    description: "God's Son who came to earth, died for our sins, and rose again.",
    keyPoints: [
      "Jesus is fully God and fully man",
      "He lived a perfect life",
      "He died for our sins",
      "He rose from the dead"
    ],
    bibleVerse: '"I am the way, and the truth, and the life" - John 14:6'
  },
  {
    id: 4,
    title: "Salvation through Faith",
    description: "We are saved by grace through faith in Jesus Christ.",
    keyPoints: [
      "Salvation is a gift from God",
      "We can't earn salvation",
      "Faith in Jesus saves us",
      "Good works follow salvation"
    ],
    bibleVerse: '"For by grace you have been saved through faith" - Ephesians 2:8'
  }
];

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ConceptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ConceptCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ConceptTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ConceptDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const KeyPointsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const KeyPoint = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: "•";
    color: #3498db;
    position: absolute;
    left: 0;
  }
`;

const BibleVerse = styled.blockquote`
  font-style: italic;
  color: #7f8c8d;
  border-left: 4px solid #3498db;
  padding-left: 1rem;
  margin: 1rem 0;
`;

function App() {
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <AppContainer>
      <Header>
        <Title>Essential Christian Concepts</Title>
        <p>Learn the fundamental truths of Christianity through interactive lessons</p>
      </Header>
      
      <ConceptGrid>
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.id}
            onClick={() => setSelectedConcept(concept)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ConceptTitle>{concept.title}</ConceptTitle>
            <ConceptDescription>{concept.description}</ConceptDescription>
            <KeyPointsList>
              {concept.keyPoints.map((point, index) => (
                <KeyPoint key={index}>{point}</KeyPoint>
              ))}
            </KeyPointsList>
            <BibleVerse>{concept.bibleVerse}</BibleVerse>
          </ConceptCard>
        ))}
      </ConceptGrid>
    </AppContainer>
  );
}

export default App;