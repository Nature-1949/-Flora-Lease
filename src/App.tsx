import React, { useState } from 'react';
import { ViewType, Plant } from './types';
import HomeView from './views/HomeView';
import ProductDetailView from './views/ProductDetailView';
import MyPlanView from './views/MyPlanView';
import MaintenanceView from './views/MaintenanceView';
import ProfileView from './views/ProfileView';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const handlePlantClick = (plant: Plant) => {
    setSelectedPlant(plant);
    setCurrentView('detail');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onPlantClick={handlePlantClick} />;
      case 'detail':
        return selectedPlant ? (
          <ProductDetailView 
            plant={selectedPlant} 
            onBack={() => setCurrentView('home')} 
          />
        ) : <HomeView onPlantClick={handlePlantClick} />;
      case 'plan':
        return <MyPlanView />;
      case 'maintenance':
        return <MaintenanceView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <HomeView onPlantClick={handlePlantClick} />;
    }
  };

  const showHeader = currentView !== 'detail';

  return (
    <div className="min-h-screen bg-surface selection:bg-tertiary-fixed">
      {showHeader && <Header />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView + (selectedPlant?.id || '')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>

      <BottomNav 
        currentView={currentView} 
        onViewChange={(view) => {
          setCurrentView(view);
          if (view !== 'detail') setSelectedPlant(null);
        }} 
      />
    </div>
  );
}

