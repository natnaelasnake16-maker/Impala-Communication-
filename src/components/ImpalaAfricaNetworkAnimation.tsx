import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  RoundedBox,
  Text,
  Html,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import {
  PenTool,
  Target,
  BarChart3,
  Megaphone,
  Users,
  Handshake,
  TrendingUp,
  ArrowUpRight,
  UsersRound,
  Lightbulb,
  Crosshair,
  LineChart,
  ArrowUpRight as ArrowIcon,
} from "lucide-react";

interface ChipData {
  id: string;
  label: string;
  type: "white" | "black" | "orange";
  icon: React.ElementType;
  position: [number, number, number];
  rotation: [number, number, number];
  size: "small" | "medium" | "large";
}

interface ConnectionData {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
  animated?: boolean;
}

const CHIPS: ChipData[] = [
  { id: "narrative", label: "Narrative", type: "white", icon: PenTool, position: [-2.6, 1.8, 0.5], rotation: [0.05, 0.15, -0.05], size: "medium" },
  { id: "strategy", label: "Strategy", type: "white", icon: Target, position: [-3.0, 0.6, -0.2], rotation: [0.08, 0.2, -0.03], size: "medium" },
  { id: "positioning", label: "Positioning", type: "black", icon: Crosshair, position: [-2.8, -0.6, 0.3], rotation: [0.03, 0.12, -0.06], size: "medium" },
  { id: "reputation", label: "Reputation", type: "black", icon: LineChart, position: [-2.4, -1.7, -0.1], rotation: [0.06, 0.18, -0.04], size: "medium" },
  { id: "insight", label: "Insight", type: "white", icon: Lightbulb, position: [-1.3, -2.4, 0.4], rotation: [0.04, 0.1, -0.07], size: "small" },
  { id: "engagement", label: "Engagement", type: "white", icon: UsersRound, position: [0.2, -2.6, -0.3], rotation: [0.07, 0.05, -0.02], size: "medium" },
  { id: "opportunity", label: "Opportunity", type: "white", icon: ArrowUpRight, position: [1.8, -2.0, 0.2], rotation: [0.05, -0.1, 0.03], size: "medium" },
  { id: "investment", label: "Investment", type: "black", icon: TrendingUp, position: [2.9, -1.0, -0.2], rotation: [0.03, -0.15, 0.05], size: "medium" },
  { id: "partnerships", label: "Partnerships", type: "white", icon: Handshake, position: [3.1, 0.4, 0.3], rotation: [0.06, -0.18, 0.04], size: "medium" },
  { id: "stakeholders", label: "Stakeholders", type: "orange", icon: Users, position: [2.7, 1.5, -0.1], rotation: [0.04, -0.12, 0.06], size: "medium" },
  { id: "campaigns", label: "Campaigns", type: "white", icon: Megaphone, position: [1.8, 2.3, 0.4], rotation: [0.05, -0.08, 0.02], size: "medium" },
  { id: "impact", label: "Impact", type: "white", icon: BarChart3, position: [0.2, 2.5, -0.3], rotation: [0.03, -0.05, 0.04], size: "medium" },
];

const CONNECTIONS: ConnectionData[] = CHIPS.map((chip) => ({
  from: [0, 0, 0] as [number, number, number],
  to: chip.position,
  color: chip.type === "orange" ? "#ff5a1f" : chip.type === "black" ? "#9ca3af" : "#d1d5db",
  animated: chip.type === "orange" || chip.id === "strategy" || chip.id === "impact",
}));

function AfricaDotMap() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 420;

  const { positions, colors } = useMemo(() => {
    const pos: number[] = [];
    const cols: number[] = [];
    const colorOrange = new THREE.Color("#ff5a1f");
    const colorGray = new THREE.Color("#c4c0b8");
    const colorLight = new THREE.Color("#e9e6e1");
    const africaPoints: Array<[number, number]> = [];

    for (let i = 0; i < 40; i++) africaPoints.push([-1.2 + Math.random() * 2.0, 1.8 + Math.random() * 0.8]);
    for (let i = 0; i < 60; i++) africaPoints.push([-1.8 + Math.random() * 1.0, 0.2 + Math.random() * 1.8]);
    for (let i = 0; i < 70; i++) africaPoints.push([-0.8 + Math.random() * 1.4, -0.2 + Math.random() * 1.6]);
    for (let i = 0; i < 50; i++) africaPoints.push([0.4 + Math.random() * 0.8, 0.0 + Math.random() * 1.4]);
    for (let i = 0; i < 50; i++) africaPoints.push([-0.6 + Math.random() * 1.2, -1.4 + Math.random() * 0.8]);
    for (let i = 0; i < 25; i++) africaPoints.push([0.8 + Math.random() * 0.6, 0.6 + Math.random() * 0.6]);
    for (let i = 0; i < 15; i++) africaPoints.push([1.6 + Math.random() * 0.3, -0.8 + Math.random() * 0.6]);
    for (let i = 0; i < 110; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 2.2;
      africaPoints.push([Math.cos(angle) * r * 0.8, Math.sin(angle) * r * 0.9 - 0.2]);
    }

    for (let i = 0; i < count; i++) {
      const pt = africaPoints[i % africaPoints.length];
      pos.push(pt[0] + (Math.random() - 0.5) * 0.15, pt[1] + (Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.3 - 1.2);
      const rand = Math.random();
      const c = rand > 0.92 ? colorOrange : rand > 0.6 ? colorGray : colorLight;
      cols.push(c.r, c.g, c.b);
    }
    return { positions: new Float32Array(pos), colors: new Float32Array(cols) };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, new THREE.Color(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]));
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [positions, colors, dummy]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.y = Math.sin(time * 0.08) * 0.03;
    meshRef.current.rotation.x = Math.cos(time * 0.06) * 0.02;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.035, 6, 6]} />
      <meshStandardMaterial roughness={0.6} metalness={0.1} vertexColors />
    </instancedMesh>
  );
}

function FloatingChip({ data, onHover, isHovered }: {
  data: ChipData;
  onHover: (id: string | null) => void;
  isHovered: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const baseScale = data.size === "small" ? 0.75 : 1.0;
  const width = data.size === "small" ? 1.4 : 1.8;
  const height = 0.55;
  const depth = 0.12;

  const bgColor = data.type === "orange" ? "#ff5a1f" : data.type === "black" ? "#171717" : "#ffffff";
  const textColor = data.type === "white" ? "#171717" : "#ffffff";
  const iconColor = data.type === "orange" ? "#ffffff" : data.type === "black" ? "#ff5a1f" : "#171717";

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const bob = Math.sin(t * 0.8 + data.position[0] * 2) * 0.04;
    groupRef.current.position.y = data.position[1] + bob;
    groupRef.current.rotation.x = data.rotation[0] + Math.sin(t * 0.5) * 0.015;
    groupRef.current.rotation.y = data.rotation[1] + Math.cos(t * 0.4) * 0.01;

    const targetScale = (isHovered || hovered) ? baseScale * 1.06 : baseScale;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group
      ref={groupRef}
      position={data.position}
      rotation={data.rotation}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(data.id); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { setHovered(false); onHover(null); document.body.style.cursor = "auto"; }}
    >
      <RoundedBox args={[width, height, depth]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color={bgColor} roughness={0.35} metalness={0.05} envMapIntensity={0.5} />
      </RoundedBox>

      {(isHovered || hovered) && (
        <mesh position={[0, 0, -0.02]}>
          <planeGeometry args={[width + 0.15, height + 0.15]} />
          <meshBasicMaterial color="#ff5a1f" transparent opacity={0.15} />
        </mesh>
      )}

      <Html
        transform
        occlude
        position={[0.12, 0, depth / 2 + 0.01]}
        style={{
          width: `${width * 120}px`,
          height: `${height * 120}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "12px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {(() => {
          const Icon = data.icon as React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
          return (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon size={16} color={iconColor} strokeWidth={2} />
              <span style={{ color: textColor, fontFamily: "'Inter', system-ui, sans-serif", fontSize: data.size === "small" ? "13px" : "14px", fontWeight: 600, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
                {data.label}
              </span>
            </div>
          );
        })()}
      </Html>
    </group>
  );
}

function CentralAfricaCard() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !glowRef.current) return;
    const t = state.clock.elapsedTime;
    const breathe = 1 + Math.sin(t * 1.2) * 0.008;
    groupRef.current.scale.set(breathe, breathe, breathe);
    (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(t * 1.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <RoundedBox args={[2.6, 1.3, 0.08]} radius={0.18} smoothness={6} position={[0, -0.06, -0.1]}>
        <meshStandardMaterial color="#f0ede8" roughness={0.4} metalness={0.05} />
      </RoundedBox>
      <RoundedBox args={[2.4, 1.15, 0.08]} radius={0.16} smoothness={6} position={[0, -0.03, -0.05]}>
        <meshStandardMaterial color="#f5f3ef" roughness={0.35} metalness={0.05} />
      </RoundedBox>
      <RoundedBox args={[2.2, 1.0, 0.14]} radius={0.14} smoothness={6}>
        <meshStandardMaterial color="#ffffff" roughness={0.25} metalness={0.05} envMapIntensity={0.8} />
      </RoundedBox>
      <mesh ref={glowRef} position={[0, -0.02, -0.18]}>
        <planeGeometry args={[2.8, 1.4]} />
        <meshBasicMaterial color="#ff5a1f" transparent opacity={0.25} />
      </mesh>
      <Text
        position={[-0.35, 0, 0.08]}
        fontSize={0.55}
        color="#ff5a1f"
        anchorX="center"
        anchorY="middle"
        fontWeight={800}
        letterSpacing={-0.03}
      >
        Africa
      </Text>
      <group position={[0.75, 0, 0.08]}>
        <mesh>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial color="#ff5a1f" roughness={0.3} metalness={0.1} />
        </mesh>
        <Html transform occlude position={[0, 0, 0.02]} style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <ArrowIcon size={18} color="#ffffff" strokeWidth={2.5} />
        </Html>
      </group>
    </group>
  );
}

function ConnectorCurve({ connection, isHighlighted }: { connection: ConnectionData; isHighlighted: boolean }) {
  const curve = useMemo(() => {
    const mid = new THREE.Vector3(
      (connection.from[0] + connection.to[0]) / 2,
      (connection.from[1] + connection.to[1]) / 2,
      (connection.from[2] + connection.to[2]) / 2 + 0.8
    );
    return new THREE.QuadraticBezierCurve3(new THREE.Vector3(...connection.from), mid, new THREE.Vector3(...connection.to));
  }, [connection]);

  const lineObject = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
    const mat = new THREE.LineBasicMaterial({
      color: isHighlighted ? "#ff5a1f" : connection.color,
      transparent: true,
      opacity: isHighlighted ? 0.9 : 0.45,
    });
    return new THREE.Line(geo, mat);
  }, [curve, isHighlighted, connection.color]);

  return (
    <group>
      <primitive object={lineObject} />
      <mesh position={connection.to}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color={isHighlighted ? "#ff5a1f" : connection.color} transparent opacity={isHighlighted ? 0.9 : 0.6} />
      </mesh>
      {connection.animated && <MovingParticle curve={curve} color={connection.color} />}
    </group>
  );
}

function MovingParticle({ curve, color }: { curve: THREE.QuadraticBezierCurve3; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = (state.clock.elapsedTime * 0.15) % 1;
    meshRef.current.position.copy(curve.getPoint(t));
    meshRef.current.scale.setScalar(1 + Math.sin(t * Math.PI) * 0.5);
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial color={color === "#d1d5db" ? "#ff5a1f" : color} transparent opacity={0.9} />
    </mesh>
  );
}

function OrbitRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) { ring1Ref.current.rotation.z = t * 0.08; ring1Ref.current.rotation.x = Math.sin(t * 0.05) * 0.15; }
    if (ring2Ref.current) { ring2Ref.current.rotation.z = -t * 0.06; ring2Ref.current.rotation.y = Math.cos(t * 0.04) * 0.1; }
  });
  return (
    <group>
      <mesh ref={ring1Ref} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.003, 8, 128]} />
        <meshBasicMaterial color="#ff5a1f" transparent opacity={0.25} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]} rotation={[Math.PI / 2.3, 0.3, 0]}>
        <torusGeometry args={[2.0, 0.002, 8, 128]} />
        <meshBasicMaterial color="#d1d5db" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function CameraParallaxController() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 8));
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  useFrame(() => {
    target.current.x = mouse.current.x * 0.4;
    target.current.y = -mouse.current.y * 0.25;
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);
  return (
    <>
      <CameraParallaxController />
      <ambientLight intensity={0.7} color="#fffaf5" />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" castShadow />
      <directionalLight position={[-3, 4, 2]} intensity={0.4} color="#ffe4d6" />
      <pointLight position={[0, -2, 1]} intensity={0.6} color="#ff5a1f" distance={6} />
      <fog attach="fog" args={["#f8f7f4", 12, 22]} />
      <mesh position={[0, 0, -4]}>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial color="#f8f7f4" side={THREE.BackSide} />
      </mesh>
      <AfricaDotMap />
      <OrbitRings />
      {CONNECTIONS.map((conn, i) => {
        const chip = CHIPS.find(c => c.position === conn.to || (c.position[0] === conn.to[0] && c.position[1] === conn.to[1]));
        return (
          <ConnectorCurve key={i} connection={conn} isHighlighted={hoveredChip !== null && chip?.id === hoveredChip} />
        );
      })}
      <CentralAfricaCard />
      {CHIPS.map((chip) => (
        <FloatingChip key={chip.id} data={chip} onHover={setHoveredChip} isHovered={hoveredChip === chip.id} />
      ))}
      <ContactShadows position={[0, -3.5, 0]} opacity={0.15} scale={12} blur={2.5} far={4} color="#9ca3af" />
    </>
  );
}

export default function ImpalaAfricaNetworkAnimation() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      style={{ width: "100%", aspectRatio: "4 / 3", background: "linear-gradient(135deg, #ffffff 0%, #f8f7f4 50%, #f0ede8 100%)", borderRadius: "16px", overflow: "hidden", position: "relative" }}
      className="impala-africa-network"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 42, near: 0.1, far: 30 }}
        dpr={[1, reducedMotion ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
