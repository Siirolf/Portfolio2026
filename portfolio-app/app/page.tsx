"use client";

import { motion } from "framer-motion";
import {Linkedin, Mail, ArrowUpRight, Download, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const professionalExperiences = [
    {
      year: "Août 2025 - Aujourd'hui",
      title: "Développeur/Testeur COBOL",
      company: "IBM CIC - Lille",
      type: "Apprentissage",
      description: "Développement d'applications bancaires COBOL : ajout de fonctionnalités, conception d'applications complètes et analyse de programmes. Collaboration inter-équipes (développeurs COBOL/C#/DevBooster, analystes, chefs de projet). Tests et assurance qualité selon les normes clients. Formation au développement sur DevBooster (framework .NET propriétaire) depuis janvier 2026.",
      tags: ["COBOL", "JCL", "RdZ", "TSO/ISPF", "DevBooster", ".NET", "Tests"]
    },
    {
      year: "Juillet - Août 2024",
      title: "Manutentionnaire",
      company: "Brasserie Goudale - Arques",
      type: "Emploi saisonnier",
      description: "Gestion de la manutention et logistique au sein d'une brasserie",
      tags: ["Logistique", "Manutention", "Travail d'équipe"]
    },
    {
      year: "Juillet - Août 2023",
      title: "Employé polyvalent",
      company: "Carrefour - Éperlecques",
      type: "Emploi saisonnier",
      description: "Mise en rayon, Service aux stands boucherie/poissonnerie/charcuterie, conseil client et gestion des stocks",
      tags: ["Commerce", "Service client", "Organisation"]
    },
    {
      year: "Juin 2023",
      title: "Administrateur réseau et systèmes",
      company: "LYPSO - Saint-Omer",
      type: "Stage",
      description: "Stage d'1 mois - Masterisation de postes informatiques, gestion de GPO, création de paquets logiciel via WAPT, interventions de maintenance, dépannage serveur, mise à jour de l'intranet et création d'une interface web pour station météo",
      tags: ["Python", "SQL", "PHP", "HTML/CSS", "WAPT", "GPO"]
    },
    {
      year: "Juillet - Août 2022",
      title: "Employé polyvalent",
      company: "Auchan - Longuenesse",
      type: "Emploi saisonnier",
      description: "Rayon boucherie, mise en rayon et respect de normes d'hygiène",
      tags: ["Commerce", "Service client", "Polyvalence"]
    }
  ];

  const getExperienceTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Apprentissage": "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700",
      "Stage": "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700",
      "Emploi saisonnier": "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700"
    };
    return colors[type] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
  };

  const personalExperiences = [
    {
      year: "2023-2026",
      title: "BUT Informatique",
      company: "Institut Universitaire de Technologie - Calais",
      description: "Formation universitaire en 3 ans axée sur le développement d'applications et l'administration de systèmes. Acquisition de compétences solides en programmation (Java, Python, C,...), développement web full-stack (React, Node.js, PHP), gestion de bases de données relationnelles (PostgreSQL, SQL) et NoSQL (MongoDB), administration systèmes et réseaux (Linux, Docker, CI/CD), intelligence artificielle et machine learning, et gestion de projet avec méthodologies Agile. Réalisation de nombreux projets SAE (Situations d'Apprentissage et d'Évaluation) seul et en équipe.",
      tags: ["Java", "Python", "C", "PostgreSQL", "Docker", "Linux", "Agile", "Réseaux", "IA"]
    },
    {
      year: "2022-2023",
      title: "BTS SIO option SLAM",
      company: "Lycée Jean Bart - Dunkerque",
      description: "1ère année de BTS Services Informatiques aux Organisations spécialité Solutions Logicielles et Applications Métiers",
      tags: ["Développement", "Sécurité"],
      certifications: [
        { name: "Certification PIX", level: "Compétences numériques" },
        { name: "Certification ANSSI", level: "Cybersécurité" }
      ]
    },
    {
      year: "2020-2023",
      title: "Baccalauréat Général",
      company: "Lycée Blaise Pascal - Longuenesse",
      description: "Spécialités Mathématiques, Physique-Chimie et NSI (Numérique et Sciences Informatiques) - Mention Assez Bien",
      tags: ["Sciences", "Informatique", "Mathématiques"]
    }
  ];

  const projects = [
    {
      title: "Site agence de location saisonnière",
      period: "Décembre 2025 - En cours",
      description: "Plateforme web complète pour agence de location avec système de réservation en ligne et gestion des disponibilités",
      image: "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-950",
      imageUrl: "/todo.jpg",
      tags: ["React", "Next.js", "Nest.js", "SQLite"]
    },
    {
      title: "Jeu vidéo en Python",
      period: "Octobre 2025 - Janvier 2026",
      description: "Développement d'un jeu vidéo complet en Python avec gestion des collisions, animations et système de score",
      image: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-950",
      imageUrl: "/todo.jpg",
      tags: ["Python", "Pygame", "Git"]
    },
    {
      title: "Développement jeux vidéo",
      period: "En cours",
      description: "Apprentissage du développement de jeux sur Unreal Engine et modélisation 3D avec Blender",
      image: "bg-gradient-to-br from-violet-50 to-fuchsia-100 dark:from-violet-950 dark:to-fuchsia-950",
      imageUrl: "/unreal.jpg",
      tags: ["Unreal Engine", "C++", "Blender"]
    },
    {
      title: "Site de prédiction Tour de France",
      period: "Avril 2025",
      description: "Site web dynamique avec API de prédiction basé sur l'analyse de données historiques avec routines PL/pgSQL",
      image: "bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950 dark:to-orange-950",
      imageUrl: "/tourdefrance.jpg",
      tags: ["SQL", "PHP", "Node.js", "PL/pgSQL"]
    },
    {
      title: "Application Mobile Flutter",
      period: "Février - Mars 2025",
      description: "Application de suivi des performances sportives avec base de données locale et gestion d'état RiverPod",
      image: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-950",
      imageUrl: "/flutter.jpg",
      tags: ["Flutter", "Dart", "Git", "Dio"]
    },
    {
      title: "Logiciel de traitement d'images astrophoto",
      period: "Janvier 2025",
      description: "Outil Python pour récupérer et traiter des images d'astrophotographie depuis MAST avec superposition",
      image: "bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950 dark:to-purple-950",
      imageUrl: "/astrophoto.jpg",
      tags: ["Python", "MAST", "PyQt6"]
    },
    {
      title: "Jeu Morpion en réseau",
      period: "Janvier 2025",
      description: "Jeu multijoueur en ligne développé en C avec utilisation de sockets réseaux et modélisation de processus",
      image: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-950",
      imageUrl: "/morpion.jpg",
      tags: ["C", "Socket", "Réseaux"]
    },
    {
      title: "Optimisation supermarché",
      period: "Mai 2024",
      description: "Logiciel d'optimisation de placement des produits avec calcul du chemin le plus court pour une liste de courses",
      image: "bg-gradient-to-br from-green-50 to-lime-100 dark:from-green-950 dark:to-lime-950",
      imageUrl: "/supermarche.jpg",
      tags: ["Python", "PyQt6", "Graphs"]
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      "Next.js": "bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300",
      "Nest.js": "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
      "Python": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
      "JavaScript": "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
      "Node.js": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      "PHP": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      "SQL": "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      "C": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
      "C++": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
      "Flutter": "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
      "Dart": "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
      "SQLite": "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300",
      "Pygame": "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300",
      "PyQt6": "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
      "Unreal Engine": "bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300",
      "Blender": "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
      "Git": "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
    };
    return colors[tag] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
  };

  const skills = {
    languages: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "Java", level: 85, icon: "☕" },
      { name: "C/C++", level: 75, icon: "⚙️" },
      { name: "JavaScript", level: 80, icon: "🟨" },
      { name: "TypeScript", level: 75, icon: "🔷" },
      { name: "PHP", level: 70, icon: "🐘" },
      { name: "COBOL", level: 70, icon: "💼" },
      { name: "SQL", level: 85, icon: "🗃️" }
    ],
    frameworks: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "Nest.js", level: 70 },
      { name: "Flutter", level: 70 },
      { name: "Symfony", level: 65 },
      { name: "Vue.js", level: 65 }
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Linux", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Figma", level: 65 },
      { name: "RdZ", level: 75 },
      { name: "DevBooster", level: 60 }
    ],
    other: [
      { name: "Intelligence Artificielle", icon: "🤖" },
      { name: "Machine Learning", icon: "🧠" },
      { name: "Réseaux & Systèmes", icon: "🌐" },
      { name: "Méthodologies Agile", icon: "🔄" },
      { name: "CI/CD", icon: "🚀" },
      { name: "Cybersécurité", icon: "🔒" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 backdrop-blur-lg border-b border-gray-700 shadow-lg shadow-blue-900/20' 
            : 'bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#"
            className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Luc Telliez<span className="text-blue-400">.</span>
          </motion.a>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              <a href="#formation" className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative group">
                Formation
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#experiences-pro" className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative group">
                Expériences
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projets" className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative group">
                Projets
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#compétences" className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative group">
                Compétences
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30"
            >
              <Download className="w-4 h-4" />
              CV
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                Disponible pour une alternance
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Développeur
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Full-Stack</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Étudiant en 3ème année de BUT Informatique et apprenti développeur COBOL, 
                actuellement candidat dans des écoles d'ingénieurs. Curieux et passionné, 
                j'aime explorer différents langages, technologies et domaines de la programmation : 
                du web moderne aux systèmes mainframe, en passant par le développement mobile et les jeux vidéo.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  Me contacter
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#projets"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 rounded-lg font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  Voir mes projets
                </motion.a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Lille, France
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  CET (UTC+1)
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                <img 
                  src="/todo.jpg" 
                  alt="Luc Telliez"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formation et Expériences Section */}
      <section id="formation" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Parcours</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ma formation académique et mon expérience professionnelle
            </p>
          </motion.div>

          {/* Formation en premier */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                Formation
              </h3>
            </div>
            <div className="space-y-4">
              {personalExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="group bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-teal-400 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 font-medium flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-emerald-500/20">
                        {exp.year}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">{exp.description}</p>
                    
                    {exp.certifications && exp.certifications.length > 0 && (
                      <div className="mb-5 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <h5 className="font-bold text-yellow-900 dark:text-yellow-200">Certifications obtenues</h5>
                        </div>
                        <div className="grid gap-2">
                          {exp.certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-900/50 p-3 rounded-lg">
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 dark:text-white">{cert.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.level}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium border border-emerald-200 dark:border-emerald-800 hover:scale-105 transition-transform cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expériences Professionnelles en second */}
          <div id="experiences-pro">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Expériences Professionnelles
              </h3>
            </div>
            <div className="space-y-4">
              {professionalExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="group bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getExperienceTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base text-gray-600 dark:text-gray-400 font-medium flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20">
                        {exp.year}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Projets récents</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quelques réalisations qui illustrent mes compétences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <div className="text-6xl opacity-50">💻</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {project.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Compétences Techniques</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Un aperçu de mes compétences et mon niveau de maîtrise
            </p>
          </motion.div>

          {/* Langages de programmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl">
                💻
              </div>
              <h3 className="text-2xl font-bold">Langages de programmation</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all cursor-default"
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Bibliothèques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl">
                📦
              </div>
              <h3 className="text-2xl font-bold">Frameworks & Bibliothèques</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.frameworks.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-pink-500 transition-all cursor-default"
                >
                  <div className="flex items-center justify-center text-center">
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outils & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-2xl">
                🛠️
              </div>
              <h3 className="text-2xl font-bold">Outils & Technologies</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-teal-500 transition-all cursor-default"
                >
                  <div className="flex items-center justify-center text-center">
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Autres compétences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-2xl">
                ⭐
              </div>
              <h3 className="text-2xl font-bold">Domaines d'expertise</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.other.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-orange-950/20 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-red-500 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Discutons de votre projet</h2>
            <p className="text-lg text-gray-300 mb-12">
              Je suis actuellement à la recherche d'une alternance.
              <br />
              N'hésitez pas à me contacter !
            </p>

            <div className="flex flex-col items-center gap-4">
              <motion.a
                href="mailto:telliezluc@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-medium text-lg transition-all shadow-lg shadow-blue-500/30"
              >
                <Mail className="w-5 h-5" />
                telliezluc@gmail.com
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/luc-telliez-903635244/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-medium text-lg transition-all shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div>© 2026 Luc Telliez. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="tel:0661066085" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              06 61 06 60 85
            </a>
            <a href="mailto:telliezluc@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
