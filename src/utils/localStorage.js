

export function load(key, fallback) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    }
    catch {
        return fallback;
    }
}

export function save(key, data){
    try {
        if(!data) return
        localStorage.setItem(key, JSON.stringify(data));
    }
    catch {
        alert("saving failed")
    }
}