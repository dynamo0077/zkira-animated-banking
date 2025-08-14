# ZRIKA Banking Experience

ZRIKA is a modern, interactive banking interface that showcases a sleek, scroll-driven user experience with smooth animations and 3D effects. Built with React and Vite, this project demonstrates advanced frontend techniques for creating engaging financial interfaces.

## Project Overview
ZRIKA features a dynamic, scroll-based interface that guides users through different banking features with beautiful transitions and visual effects. The application is designed to be visually stunning while maintaining high performance and responsiveness.

## ✨ Key Features
- **Immersive Scroll Experience**: Smooth, scroll-based navigation between different banking features
- **3D Visual Elements**: Interactive 3D card and charging pad animations
- **Performance Optimized**: Built with performance in mind using React.memo and custom hooks
- **Responsive Design**: Adapts to different screen sizes while maintaining visual appeal
- **Debug Tools**: Built-in performance monitoring and debug overlay

## 🚀 Tech Stack
- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Pure CSS with CSS Variables
- **Animation**: CSS Transitions & Transforms
- **Performance**: Custom hooks for scroll tracking and FPS monitoring

## 🛠️ Development

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd zkira-banking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   The application will be available at `http://localhost:5173`

## 🎨 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── scenes/          # Individual scene components
│   └── ParticlesBackground.jsx  # Animated background component
├── hooks/               # Custom React hooks
│   ├── usePerformanceMonitor.js
│   └── useScrollProgress.js
├── utils/               # Utility functions
│   └── sceneUtils.js    # Scene transition helpers
├── App.jsx              # Main application component
└── App.css              # Global styles
```

## 🎮 Controls
- **Scroll**: Navigate through different sections
- **Arrow Keys/Page Up/Down**: Keyboard navigation
- **1-5**: Jump to specific sections
- **Home/End**: Jump to start/end

## 🧪 Testing
Run the test suite with:
```bash
npm test
```

## 📦 Building for Production
```bash
npm run build
```

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Built with [Vite](https://vitejs.dev/)
- Inspired by modern banking interfaces
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173` (default) to access the app.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review. For major changes, open an issue first to discuss what you would like to change.

## License
This project is open source and available under the [MIT License](LICENSE).
