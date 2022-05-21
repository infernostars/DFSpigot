function decodeTemplate(data) {
  // Permanently borrowed from Ottelino
  compressData = atob(data);
  compressData = compressData.split("").map(function (e) {
    return e.charCodeAt(0);
  });
  binData = new Uint8Array(compressData);
  data = pako.inflate(binData);
  return JSON.parse(String.fromCharCode.apply(null, new Uint16Array(data)));
}

var decodedJson = decodeTemplate("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");

console.log(decodedJson);

var root = decodedJson.blocks[0];
var eventTypes = {
  Leave: "PlayerQuitEvent",
  Join: "PlayerJoinEvent",
  RightClick: "PlayerInteractEvent",
};

var libraries = [
  "me.wonk2.Utilities.DFUtilities",
  "org.bukkit.*",
  "org.bukkit.ChatColor",
  "org.bukkit.command.CommandSender",
  "org.bukkit.command.Command",
  "org.bukkit.command.CommandExecutor",
  "org.bukkit.entity.Player",
  "org.bukkit.event.Listener",
  "org.bukkit.event.EventHandler",
  "org.bukkit.plugin.java.JavaPlugin",
  "java.util.HashMap"
];
libraries.push(`org.bukkit.event.player.${eventTypes[root.action]}`);

var code = [
  "public class DFPlugin extends JavaPlugin implements Listener, CommandExecutor",
  "@EventHandler",
  ["public void " + root.action + "(" + eventTypes[root.action] + " event) throws IOException, CommandSyntaxException"],
  "",
  [
    "public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args)",
    "return true;",
  ],
  "",
  "@Override",
  [
    "public void onEnable()",
    "getServer().getPluginManager().registerEvents(this, this);",
  ],
];

var mainFunc = code[2];
var plugin = `(JavaPlugin) Bukkit.getPluginManager().getPlugin("DFPlugin")`;
Spigotify(decodedJson.blocks);

function Spigotify(thread) {
  for (let i = 1; i < thread.length; i++) {
    let codeBlock = thread[i];
    setTimeout(function () {
      bannedBlocks = ["event", "process", "function", "entity_event"];
      if (bannedBlocks.includes(codeBlock.block)) {
        console.error(
          "INVALID INPUT: Found 1 or more root blocks inside this thread!"
        );
        return;
      }

      let formattedLibraries = "";
      let actionResult = window[codeBlock.block](codeBlock);
      if (actionResult != null) {
        if (Array.isArray(actionResult)) {
          for (let k = 0; k < actionResult.length; k++) {
            mainFunc.push(formatAction(actionResult[k], codeBlock.target));
          }
        } else mainFunc.push(formatAction(actionResult, codeBlock.target));
      }

      for (let k = 0; k < libraries.length; k++) {
        formattedLibraries += `import ${libraries[k]};\n`;
      }
      document.getElementById("code").innerHTML =
        formattedLibraries + "\n" + formatChildren(code[0], code, "  ");
    }, i * 250);
  }
}

function formatChildren(element, children, indent) {
  element += "{";
  for (let i = 1; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      element +=
        "\n" +
        formatChildren(indent + children[i][0], children[i], indent + "  ");
    } else {
      element += "\n" + indent + children[i];
    }
  }

  return (element += "\n" + indent.replace("  ", "") + "}");
}

function formatAction(action, targets) {
  targets = targets == null ? "default" : targets;
  action = textCodes(action.replace(/Â§/g, "§"));
  let isMethod = action.includes("DFUtilities");
  switch (targets) {
    case "default":
      if (!isMethod) action = "event.getPlayer()." + action;
      return action + ";";
    case "AllPlayers":
      if (!isMethod) action = "p." + action;
      return "Bukkit.getOnlinePlayers().forEach(p -> " + action + ");";
    default:
      return null;
  }
}

function textCodes(str) {
  let codes = {
    "%default": "event.getPlayer().getName()",
  };

  for (let i = 0; i < Object.keys(codes).length; i++) {
    let temp = Object.keys(codes)[i];
    str = str.replace(new RegExp(temp, "g"), `" + ${codes[temp]} + "`);
  }

  return str;
}

function getCodeArgs(codeBlock) {
  let args = [];
  let types = [];
  let slots = [];
  let tags = {};
  for (let i = 0; i < codeBlock.args.items.length; i++) { 
    let arg = codeBlock.args.items[i].item; 
    let pushType = null;
    if (arg.id != "bl_tag") {
      switch (arg.id) {
        case "txt":
        case "num":
          pushType = arg.data.name; // This is for pushing different argument information depending on the data type
          break;
        case "snd":
          pushType = arg.data;
          break;
        case "loc":
          pushType = [
            arg.data.loc.x,
            arg.data.loc.y,
            arg.data.loc.z,
            arg.data.loc.yaw,
            arg.data.loc.pitch
          ];
          break;
        case "item":
          pushType = arg.data.item;
          break;
      }

      args.push(pushType);
      slots.push(codeBlock.args.items[i].slot);
      types.push(arg.id);
    } else tags[arg.data.tag] = arg.data.option;
  }

  return [defaultValues(args, types, slots, codeBlock.action), slots, tags];
}

function defaultValues(args, types, slots, action) {
  let defaults = {};
  let defaultTypes = {};
  let repeating = [];
  let optionals = [];

  switch (action) {
    case "SendMessage":
      defaults = {msgs: ["§4ERR: Invalid Argument"]};
      defaultTypes = {msgs:"txt"};
      break;
    case "PlaySound":
      defaults = {sounds: [`{"sound": "Pling","pitch": 1,"vol": 2}`], location: null};
      defaultTypes = {sounds:"snd", location: "loc"};
      repeating = ["snd"];
      break;
    case "PlaySoundSeq":
      defaults = {sounds: [`{"sound": "Pling","pitch": 1,"vol": 2}`], delay: 60, location: null};
      defaultTypes = {sounds:"snd", delay: "num", location: "loc"};
      repeating = ["snd"];
      break;
    case "SendMessageSeq":
      defaults = {msgs: ["§4ERR: Invalid Argument"], delay: 60};
      defaultTypes = {msgs:"txt", delay: "num"};
      repeating = ["txt"];
      break;
    case "SendTitle":
      defaults = {title: "§4ERR: Invalid Argument",subtitle: "§cPlease review your chest arguments",duration: 60,fadeIn: 20,fadeOut: 20};
      defaultTypes = {title: "txt", subtitle: "txt", duration: "num", fadeIn: "num", fadeOut: "num"};
      break;
    case " SetBossBar ":
      defaults = {title: "§4ERR: Invalid Argument",health: 100,maxhealth: 100,index: 1};
      defaultTypes = {title: "txt", health: "num", maxhealth: "num", index: "num"};
      break;
    case "ActionBar":
      defaults = {msgs: ["§4ERR: Invalid Argument"]}
      defaultTypes = {msgs: "txt"};
      repeating = ["txt"];
      break;
    case " RemoveBossBar ":
      defaults = { index: null };
      defaultTypes = {index: "num"};
      break;
    case "SendHover":
      defaults = {msg: "§4ERR: Invalid Argument", hover: "§cPlease review your chest arguments"};
      defaultTypes = {msg: "txt", hover: "txt"};
      break;
    case "SetTabListInfo":
      defaults = {tabinfo: ["", "§4ERR: Invalid Argument", ""]};
      defaultTypes = {tabinfo: "txt"};
      repeating = ["txt"];
      break;
    case "StopSound":
      defaults = {sounds: []};
      defaultTypes = {sounds: "snd"};
      repeating = ["snd"];
      break;
    case "GiveItems":
      defaults = {
        items: [
          `{Count:1b,id:"minecraft:barrier",tag:{display:{Lore:['{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"Please review your chest arguments."}],"text":""}','{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"You did not put any items in the chest"}],"text":""}','{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"for this GiveItems action."}],"text":""}'],Name:'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_red","text":"Error: Invalid Arguments"}],"text":""}'}}}`
        ],
        stack: 1
      };
      defaultTypes = {items: "item", stack: "num"};
      repeating = ["item"];
      break;
    case "SetHotbar":
    case "SetInventory":
      defaults = {items: [`{Count:1b,id:"minecraft:barrier",tag:{display:{Lore:['{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"Please review your chest arguments."}],"text":""}','{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"You did not put any items in the chest"}],"text":""}','{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"for this GiveItems action."}],"text":""}'],Name:'{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_red","text":"Error: Invalid Arguments"}],"text":""}'}}}`]};
      defaultTypes = {items: "item"};
      repeating = ["item"];
      break;
    case "SetSlotItem":
      defaults = {item: `{Count:1b,id:"minecraft:air"}`, slot: 0};
      defaultTypes = {item: "item", slot: "num"};
      optionals = ["item"]; // KEY Name
      break;
  }

  let keys = Object.keys(defaults);
  let k = 0;
  for (let i = 0; i < keys.length; i++) {
    if (repeating.includes(types[k])) {
      // Get Repeating Elements
      let arr = [];
      let type = types[k];
      while (types[k] == type) {
        arr.push(args[k++]);
      }
      if (arr.length != 0) defaults[keys[i]] = arr;
      continue;
    }

    if(args[k] != null && types[k] == defaultTypes[keys[i]]) defaults[keys[i]] = args[k];
    if(!(optionals.includes(keys[i]) && types[k] != defaultTypes[keys[i]])) k++;
  }

  return defaults;
}

function newImport(newLibraries) {
  for (let i = 0; i < newLibraries.length; i++) {
    let lib = newLibraries[i];
    if (!libraries.includes(lib)) libraries.push(lib);
  }
}

function actionPrecedents(precedents) {
  for (let i = 0; i < precedents.length; i++) {
    mainFunc.push(precedents[i]);
  }
}

function addInitializer(initializer) {
  initializer += ";";
  if (!code.includes(initializer)) code.splice(1, 0, initializer);
}

function nbtFormat(nbt){
  doubleQuotes = new RegExp(`"`, "g");
  singleQuotes = new RegExp(`'`, "g");
  return nbt.replace(doubleQuotes, `\\"`).replace(singleQuotes, `\\'`);
}

function Stringify(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `"${arr[i]}"`;
  }

  return arr;
}

function player_action(codeBlock) {
  let temp = getCodeArgs(codeBlock);
  
  let args = temp[0];
  let slots = temp[1];
  let tags = temp[2];

  let targetTypes = {
    default: "event.getPlayer()",
    AllPlayers: "p",
  };

  let targetSyntax =
    codeBlock.target == null
      ? "event.getPlayer()"
      : targetTypes[codeBlock.target];

  switch (codeBlock.action) {
    case "SendMessage":
      spacing = tags["Text Value Merging"] == "Add spaces" ? " " : "";
      msg = textCodes(args.join(spacing));
      return `sendMessage("${msg}")`;

    case "CreativeMode":
    case "SurvivalMode":
    case "AdventureMode":
      modes = {
        CreativeMode: "GameMode.CREATIVE",
        SurvivalMode: "GameMode.SURVIVAL",
        AdventureMode: "GameMode.ADVENTURE",
      };
      return `setGameMode(${modes[codeBlock.action]})`;

    case "PlaySound":
      soundLoc =
        args["location"] != null
          ? `new Location(${targetSyntax}.getWorld(), ${args["location"][0]}, ${args["location"][1]}, ${args["location"][2]}, ${args["location"][3]}f, ${args["location"][4]}f)`
          : `${targetSyntax}.getLocation()`;

      soundInfo = [];
      for (let i = 0; i < args["sounds"].length; i++) {
        soundInfo.push(`{${args["sounds"][i].vol}f, ${args["sounds"][i].pitch}f}`);
      }

      return `DFUtilities.playSounds(${targetSyntax}, new String[] {${args["sounds"]}}, ${soundLoc}, new float[][]{${soundInfo}}, (long) 0)`;
    //----------------------------------------------------------------------------------------------------//
    case "SendTitle":
      return `sendTitle("${args["title"]}", "${args["subtitle"]}", ${args["duration"]}, ${args["fadeIn"]}, ${args["fadeOut"]})`;
    //----------------------------------------------------------------------------------------------------//
    case "ActionBar":
      newImport([
        "net.md_5.bungee.api.ChatMessageType",
        "net.md_5.bungee.api.chat.TextComponent",
      ]);

      spacing = tags["Text Value Merging"] == "Add spaces" ? " " : "";

      msg = textCodes(args["msgs"].join(spacing));
      return `spigot().sendMessage(ChatMessageType.ACTION_BAR, TextComponent.fromLegacyText("${msg}"))`;
    //----------------------------------------------------------------------------------------------------//
    case " SetBossBar ":
      newImport([
        "org.bukkit.boss.BarColor",
        "org.bukkit.boss.BarFlag",
        "org.bukkit.boss.BarStyle",
        "org.bukkit.boss.BossBar",
        "java.util.TreeMap",
      ]);
      addInitializer(`TreeMap<String, TreeMap<Integer, BossBar>> BossbarHandler = new TreeMap<>()`);

      barStyles = {
        Solid: "SOLID",
        "6 segments": "SEGMENTED_6",
        "10 segments": "SEGMENTED_10",
        "12 segments": "SEGMENTED_12",
        "20 segments": "SEGMENTED_20",
      };

      barFlags = [];
      barColor = tags["Bar Color"].toUpperCase();
      progress = args["health"] / args["maxhealth"];
      style = barStyles[tags["Bar Style"]];

      if (tags["Sky Effect"] == "Both" || tags["Sky Effect"] == "Create fog")
        barFlags.push("BarFlag.CREATE_FOG");
      if (tags["Sky Effect"] == "Both" || tags["Sky Effect"] == "Darken sky")
        barFlags.push("BarFlag.DARKEN_SKY");

      return `BossbarHandler.put(${targetSyntax}.getName(), DFUtilities.setBossBar(${targetSyntax}, "${args["title"]}", ${args["index"]}, ${progress}, BarColor.${barColor}, BarStyle.${style}, new BarFlag[]{${barFlags}}, BossbarHandler))`;
    //----------------------------------------------------------------------------------------------------//
    case " RemoveBossBar ":
      addInitializer(
        `TreeMap<String, TreeMap<Integer, BossBar>> BossbarHandler = new TreeMap<>()`
      );
      return `BossbarHandler.put(${targetSyntax}.getName(), DFUtilities.removeBossbar(${targetSyntax}, ${args["index"]}, BossbarHandler))`;
    //----------------------------------------------------------------------------------------------------//
    case "SendMessageSeq":
      msgs = Stringify(args["msgs"]);
      return `DFUtilities.sendMessageSeq(${targetSyntax}, new String[]{${msgs}}, (long) ${args["delay"]}, ${plugin})`;
    //----------------------------------------------------------------------------------------------------//
    case "PlaySoundSeq":
      soundLoc =
        args["location"] != null
          ? `new Location(${targetSyntax}.getWorld(), ${args["location"][0]}, ${args["location"][1]}, ${args["location"][2]}, ${args["location"][3]}f, ${args["location"][4]}f)`
          : `${targetSyntax}.getLocation()`;

      soundsArr = [];
      soundInfo = [];
      for (let i = 0; i < args["sounds"].length; i++) {
        soundsArr.push(args["sounds"][i].sound);
        soundInfo.push(`{${args["sounds"][i].vol}f, ${args["sounds"][i].pitch}f}`);
      }

      return `DFUtilities.playSounds(${targetSyntax}, new String[] {${Stringify(
        soundsArr
      )}}, ${soundLoc}, new float[][]{${soundInfo}}, (long) ${args["delay"]}, ${plugin})`;
    //----------------------------------------------------------------------------------------------------//
    case "SendHover":
      return `DFUtilities.sendHover(${targetSyntax}, "${args["msg"]}", "${args["hover"]}")`;
    //----------------------------------------------------------------------------------------------------//
    case "StopSound":
      soundsArray = [];
      for (let i = 0; i < args["sounds"].length; i++) {
        soundsArray.push(`"${args[i].sound}"`);
      }
      return `DFUtilities.stopSounds(${targetSyntax}, new String[] {${soundsArray}}, SoundCategory.${tags[
        "Sound Source"
      ].toUpperCase()})`;
    //----------------------------------------------------------------------------------------------------//
    case "SetTabListInfo":
      headerList = args["tabinfo"][0];
      for (let i = 1; i < args["tabinfo"].length; i++) {
        headerList += `\\n${args["tabinfo"][i]}`;
      }
      return `setPlayerList${tags["Player List Field"]}("${headerList}")`;
    //----------------------------------END OF COMMUNICATION----------------------------------------------//
    case "GiveItems":
      newImport(["java.io.IOException", "com.mojang.brigadier.exceptions.CommandSyntaxException"]);
      nbtArray = [];

      for (let i = 0; i < args["items"].length; i++) {
        nbtArray.push(
          `"${nbtFormat(args["items"][i])}"`
        );
      }
      return `DFUtilities.GiveItems(${targetSyntax}, new String[] {${nbtArray}}, (byte) ${args["stack"]})`;
    //----------------------------------------------------------------------------------------------------//
    case "SetHotbar":
      newImport(["java.io.IOException", "com.mojang.brigadier.exceptions.CommandSyntaxException", "java.util.HashMap"]);
      
      hashmap = ["HashMap<Integer, String> hotbarItems = new HashMap<Integer, String>() {{"];
      for(let i = 0; i < args["items"].length; i++){
        hashmap.push(`put(${slots[i]}, "${nbtFormat(args["items"][i])}");`)
      }
      hashmap.push("}};");
      actionPrecedents(hashmap);
      return `DFUtilities.SetItems(${targetSyntax}, hotbarItems)`
    //----------------------------------------------------------------------------------------------------//
    case "SetInventory":
      newImport(["java.io.IOException", "com.mojang.brigadier.exceptions.CommandSyntaxException", "java.util.HashMap"]);
      
      hashmap = "new HashMap<Integer, String>(){{";
      for(let i = 0; i < args["items"].length; i++){
        hashmap += `put(${slots[i] + 9}, "${nbtFormat(args["items"][i])}");`;
      }
      hashmap += "}}";
      return `DFUtilities.SetItems(${targetSyntax}, ${hashmap})`
    //----------------------------------------------------------------------------------------------------//
    case "SetSlotItem":
      newImport(["java.io.IOException", "com.mojang.brigadier.exceptions.CommandSyntaxException"]);
      return `DFUtilities.SetItemInSlot(${targetSyntax}, ${args["slot"] - 1}, "${nbtFormat(args["item"])}")`
  }
}
