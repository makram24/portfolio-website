import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { decryptFile } from "./decrypt";
import { publicUrl } from "../../../utils/publicUrl";

async function prepareCharacter(
  gltf: GLTF,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
): Promise<GLTF> {
  const character = gltf.scene;
  await renderer.compileAsync(character, camera, scene);
  character.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      child.castShadow = false;
      child.receiveShadow = false;
      mesh.frustumCulled = true;
      if (mesh.material && !Array.isArray(mesh.material)) {
        (mesh.material as THREE.ShaderMaterial).precision = "mediump";
      }
    }
  });
  const footR = character.getObjectByName("footR");
  const footL = character.getObjectByName("footL");
  if (footR) footR.position.y = 3.36;
  if (footL) footL.position.y = 3.36;
  return gltf;
}

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(publicUrl("/draco/"));
  loader.setDRACOLoader(dracoLoader);

  const loadFromUrl = (url: string): Promise<GLTF> =>
    new Promise((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          prepareCharacter(gltf, renderer, scene, camera)
            .then(resolve)
            .catch(reject);
        },
        undefined,
        (error) => {
          console.error("[character] GLTF load failed:", url, error);
          reject(error);
        }
      );
    });

  const loadCharacter = async (): Promise<GLTF | null> => {
    const glbUrl = publicUrl("/models/character.glb");
    const encUrl = publicUrl("/models/character.enc");

    try {
      const encryptedData = await decryptFile(encUrl, "Character3D#@");
      const blobUrl = URL.createObjectURL(new Blob([encryptedData]));
      try {
        return await loadFromUrl(blobUrl);
      } finally {
        URL.revokeObjectURL(blobUrl);
      }
    } catch (error) {
      console.warn(
        "[character] Encrypted model unavailable, loading GLB:",
        error
      );
    }

    try {
      return await loadFromUrl(glbUrl);
    } catch (error) {
      console.error("[character] Could not load 3D model:", error);
      return null;
    } finally {
      dracoLoader.dispose();
    }
  };

  return { loadCharacter };
};

export default setCharacter;
