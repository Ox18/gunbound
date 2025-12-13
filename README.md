# Gunbound Web (PixiJS)

## Overview

Gunbound Web is an educational and experimental project developed entirely from scratch, whose primary goal is to recreate the classic **GunBound** gameplay experience as faithfully as possible using modern web technologies.

The project is built using **PixiJS**, **TypeScript**, and **WebGL**, and focuses on replicating the visual style, animations, and mechanics of the original game while adapting them to a modern browser-based environment.

This project does not reuse source code, assets, or proprietary logic from the original GunBound game. All systems are independently implemented based on observed behavior and technical analysis.

---

## Project Philosophy

The core goals of Gunbound Web are:

- To design and implement a complete 2D game client using web technologies
- To faithfully reproduce GunBound’s mechanics, visual style, and user experience
- To understand and document game architecture patterns used in classic 2D games
- To explore real-time rendering and animation with WebGL
- To provide an educational reference for game development with PixiJS

This project emphasizes clarity, maintainability, and architectural separation over quick prototyping.

---

## Technology Stack

Gunbound Web is built using the following technologies:

- **PixiJS** – High-performance 2D rendering engine powered by WebGL
- **TypeScript** – Strong typing and scalable architecture
- **Vite** – Fast development server and build tool
- **WebGL** – GPU-accelerated rendering in the browser

This project does **not** use WebAssembly.  
All gameplay logic is implemented directly in TypeScript.

---

## Fidelity Goals

A primary objective of this project is to achieve a high level of fidelity with the original GunBound, including:

- Sprite-based animations with the original “paper-cut” visual style
- Animated UI elements such as buttons and panels
- Turn-based combat system
- Physics-based projectile motion with wind influence
- Camera behavior and visual effects consistent with the original game
- HUD and menu layouts inspired by the classic interface

While exact internal implementations may differ, the external behavior and overall feel are intended to closely match the original game.

---

## Educational and Legal Notice

This project is developed strictly for educational and research purposes.

- It is not affiliated with Softnyx or any official GunBound property
- It does not use or distribute original game assets
- It is not intended for commercial use

The goal of this project is technical learning and architectural experimentation.
